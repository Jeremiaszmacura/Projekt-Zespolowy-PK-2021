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
    getRepository(Product).save(req.body).then((result) => res.json(result));
};

const one = async (req, res) => {
    getRepository(Product).findOne(req.params.id).then((result) => res.json(result));
};

const all = async (req, res) => {
    let products;
    await getRepository(Product).find().then((result) => products = result);
    for (let product of products) {
        await getRepository(Category).findOne({where: {id: product.categoryId}}).then((result2) => {
            product.category = result2.name;
        });
    }
    res.json(products);
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
