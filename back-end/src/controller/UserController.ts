import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {UserDetails} from "../entity/UserDetails";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

const login = async (req, res) => {
    await getRepository(User).findOne({where: {email: req.body.email}}).then((result) => {
        bcrypt.compare(req.body.password, result.password, (err, result) => {
            if (err) {
                return res.status(500).render('500');
            }
            if (result) {
                const token = generateAccessToken({ username: req.body.username });
                return res.json(token);
            }
            res.json('Wrong password!');
        });
    });
}

const remove = async (req, res) => {
    getRepository(User).findOne(req.params.id).then((result) => {
        getRepository(User).remove(result).then((result) => res.json(result));
    });
}

const save = async (req, res) => {
    req.body.user.password = await bcrypt.hash(req.body.user.password, 10);
    getRepository(User).save(req.body.user).then((result) =>
    {
        req.body.user_details.userId = result.id;
        getRepository(UserDetails).save(req.body.user_details).then((result) => res.json(result));
    });
};

const one = async (req, res) => {
    getRepository(User).findOne(req.params.id).then((result) => res.json(result));
};

const all = async (req, res) => {
    getRepository(User).find().then((result) => res.json(result));
};

const getUserDetails = async (req, res) => {
    getRepository(UserDetails).findOne({where: {userId: req.params.id}}).then((result) => res.json(result));
};

const updateUserDetails = async (req, res) => {
    getRepository(UserDetails).findOne({where: {userId: req.params.id}}).then((result) => {
        req.body.id = result.id;
        getRepository(UserDetails).save(req.body).then((result) => res.json(result));
    });
};
const updateUserPassword = async (req, res) => {
    getRepository(User).findOne({where: {id: req.params.id}}).then((result) => {
        console.log(req.body);
        result.password = req.body.password;
        getRepository(User).save(result).then((result) => res.json(result));
    });
}


module.exports = {
    all,
    one,
    save,
    remove,
    getUserDetails,
    updateUserDetails,
    updateUserPassword,
    login
};
