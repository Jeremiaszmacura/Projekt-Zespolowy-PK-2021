import {getRepository} from "typeorm";
import {Order} from "../entity/Order";
import {ProductsLists} from "../entity/ProductsLists";


const save = async (req, res) => {
    /*
    Przesyłają listę produktów {
        price: price,
        products: [
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
    }
    Tworzę rekord order
    Tworzę listę zakupów w products_lists (tyle rekordów ile elementów w tablicy)
     */

    await getRepository(Order).save({'price': req.body.price, 'userId': req.user.id}).then((result) =>
    {
        const orderId = result.id;
        req.body.products.forEach(function (product) {
            product.orderId = orderId;
            getRepository(ProductsLists).save(product);
        });
        return res.json(result);
    });
};

const getOrder = async (req, res) => {
    await getRepository(Order).findOne({where: {userId: req.user.id}})
        .then((result) => {
            getRepository(ProductsLists).find({where: {orderId: result.id}}).then((result2) => {
                return res.json({"price": result.price,
                    "order_status": result.order_status,
                    "created_at": result.created_at,
                    "products": result2
                });
            });
        });
};

const setStatusPaid = async (req, res) => {
    await getRepository(Order).findOne({where: {id: req.params.id}})
        .then((result) => {
            result.order_status = "oplacone";
            getRepository(Order).save(result).then((result) => {
                res.json(result);
            });
        });
};


module.exports = {
    save,
    getOrder,
    setStatusPaid
};
