import {getRepository} from "typeorm";
import {Product} from "../entity/Product";


const remove = async (req, res) => {
    getRepository(Product).findOne(req.params.id).then((result) => {
        getRepository(Product).remove(result).then((result) => res.json({content: result}));
    });
}

const save = async (req, res) => {
    console.log(req.body);
    getRepository(Product).save(req.body).then((result) => res.json({content: result}));
}

const one = async (req, res) => {
    getRepository(Product).findOne(req.params.id).then((result) => res.json({content: result}));
}

const all = async (req, res) => {
    getRepository(Product).find().then((result) => res.json({content: result}));
};

module.exports = {
    all,
    one,
    save,
    remove
};
