import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {UserDetails} from "../entity/UserDetails";


const remove = async (req, res) => {
    getRepository(User).findOne(req.params.id).then((result) => {
        getRepository(User).remove(result).then((result) => res.json(result));
    });
}

const save = async (req, res) => {
    getRepository(User).save(req.body.user).then((result) =>
    {
        req.body.user_details.userId = result.id;
        getRepository(UserDetails).save(req.body.user_details).then(() => res.json(result));
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
    updateUserPassword
};
