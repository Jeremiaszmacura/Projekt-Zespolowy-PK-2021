import {getRepository} from "typeorm";
import {User} from "../entity/User";


const remove = async (req, res) => {
    getRepository(User).findOne(req.params.id).then((result) => {
        getRepository(User).remove(result).then((result) => res.json({content: result}));
    });
}

const save = async (req, res) => {
    console.log(req.body);
    getRepository(User).save(req.body).then((result) => res.json({content: result}));
}

const one = async (req, res) => {
    getRepository(User).findOne(req.params.id).then((result) => res.json({content: result}));
}

const all = async (req, res) => {
    getRepository(User).find().then((result) => res.json({content: result}));
};

module.exports = {
    all,
    one,
    save,
    remove
};
