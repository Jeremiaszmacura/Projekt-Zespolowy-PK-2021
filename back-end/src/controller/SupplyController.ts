import {getRepository} from "typeorm";
import {Supply} from "../entity/Supply";
import {SuppliesLists} from "../entity/SuppliesLists";


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
        req.body.forEach(function (product) {
            product.orderId = supplyId;
            getRepository(SuppliesLists).save(product);
        });
    });
}

module.exports = {
    save
};
