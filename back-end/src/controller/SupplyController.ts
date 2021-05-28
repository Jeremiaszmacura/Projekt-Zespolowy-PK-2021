import {getRepository} from "typeorm";
import {Supply} from "../entity/Supply";
import {SuppliesLists} from "../entity/SuppliesLists";
import {ProductsLists} from "../entity/ProductsLists";
import {Order} from "../entity/Order";


const save = async (req, res) => {
    /*
    Przesyłają listę produktów {
    [
        {
            productId: id1,
            quantity: quantity1
        },
        {
            productId: id2,
            quantity: quantity2
        },
        {
            productId: id3,
            quantity: quantity3
        },
        {
            productId: id4,
            quantity: quantity4
        }
    ]
    Tworzę rekord supply
    Tworzę listę zapotrzebowanie w supplies_lists (tyle rekordów ile elementów w tablicy)
     */

    getRepository(Supply).save({}).then((result) =>
    {
        const supplyId = result.id;
        req.body.products.forEach(function (product) {
            product.supplyId = supplyId;
            getRepository(SuppliesLists).save(product);
        });
        return res.json(result);
    });
};

const getSupplies = async (req, res) => {
    await getRepository(Supply).find()
        .then((result) => {
            getRepository(SuppliesLists).find().then((result2) => {
                return res.json({"supplies": result,
                    "supplies_lists": result2
                });
            });
        });
};

const setStatusDone = async (req, res) => {
    await getRepository(Supply).findOne({where: {id: req.params.id}})
        .then((result) => {
            result.supply_status = "zrealizowane";
            getRepository(Supply).save(result).then((result) => {
                res.json(result);
            });
        });
};

module.exports = {
    save,
    getSupplies,
    setStatusDone
};
