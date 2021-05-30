import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {UserDetails} from "../entity/UserDetails";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


function generateAccessToken(id) {
    return jwt.sign(id, process.env.TOKEN_SECRET, { expiresIn: '18000s' });
}

const login = async (req, res) => {
    await getRepository(User).findOne({where: {email: req.body.email}}).then((result) => {
        if (!result) {
            return res.json('User does not exist');
        }
        bcrypt.compare(req.body.password, result.password, (err, result2) => {
            if (err) {
                return res.json(err.toString());
            }
            if (result2) {
                const token = generateAccessToken({ id: result.id });
                return res.json(token);
            }
            return res.json('Wrong password!');
        });
    });
}

const remove = async (req, res) => {
    getRepository(User).findOne(req.user.id).then((result) => {
        getRepository(User).remove(result).then((result) => res.json(result));
    });
}

const postUserRegister = async (req, res) => {
    req.body.user.password = await bcrypt.hash(req.body.user.password, 10);
    getRepository(User).save(req.body.user).then((result) =>
    {
        req.body.user_details.userId = result.id;
        getRepository(UserDetails).save(req.body.user_details).then((result) => res.json(result));
    });
};

const getUserDetails = async (req, res) => {
    getRepository(User).findOne(req.user.id)
        .then((result) => {
        getRepository(UserDetails).findOne({where: {userId: req.user.id}})
            .then((result2) => {
                result2["email"] = result.email;
                res.json(result2)
            });
    });
};

const updateUserDetails = async (req, res) => {
    getRepository(UserDetails).findOne({where: {userId: req.user.id}}).then((result) => {
        req.body.id = result.id;
        getRepository(UserDetails).save(req.body).then((result2) => res.json(result2));
    });
};

const updateUserPassword = async (req, res) => {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    getRepository(User).findOne({where: {id: req.user.id}}).then((result) => {
        result.password = hashedPass;
        getRepository(User).save(result).then((result) => res.json(result));
    });
};

const all = async (req, res) => {
    getRepository(User).find().then((result) => res.json(result));
};

const getAllUsers = async (req, res) => {
    getRepository(UserDetails).findOne({where: {userId: req.user.id}})
        .then((result) => {
            if (result.role !== 'admin'){
                return res.json('You have to be an admin.');
            }
            all(req, res);
        });
};

const setAdmin = async (req, res) => {
    getRepository(UserDetails).findOne({where: {userId: req.user.id}})
        .then((result) => {
            if (result.role !== 'admin'){
                return res.json('You have to be an admin.');
            }
            getRepository(UserDetails).findOne({where: {userId: req.params.id}}).then((result) => {
                result.role = 'admin';
                getRepository(UserDetails).save(result).then((result) => res.json(result));
            });
        });
};

module.exports = {
    postUserRegister,
    remove,
    getUserDetails,
    updateUserDetails,
    updateUserPassword,
    login,
    getAllUsers,
    setAdmin
};
