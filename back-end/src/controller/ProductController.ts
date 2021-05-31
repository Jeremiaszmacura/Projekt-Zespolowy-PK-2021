import {getRepository} from "typeorm";
import {Product} from "../entity/Product";
import {Category} from "../entity/Category";
var fs = require('fs');


const remove = async (req, res) => {
    getRepository(Product).findOne(req.params.id).then((result) => {
        getRepository(Product).remove(result).then((result) => res.json(result));
    });
};

const save = async (req, res) => {
    let image = req.files[0];
    console.log(req.files[0].originalname)
    console.log(image)
    //image.mv('./uploads/' + image.originalname);

    //getRepository(Product).save(req.body).then((result) => res.json(result));
    return {};
};

const one = async (req, res) => {
    getRepository(Product).findOne(req.params.id).then((result) => res.json(result));
};

const all = async (req, res) => {
    getRepository(Product).find().then((result) => res.json(result));
};

const saveCategory = async (req, res) => {
    getRepository(Category).save(req.body).then((result) => res.json(result));
};

const getCategories = async (req, res) => {
    getRepository(Category).find().then((result) => res.json(result));
};


module.exports = {
    all,
    one,
    save,
    remove,
    saveCategory,
    getCategories
};
