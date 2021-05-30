import {getRepository} from "typeorm";
import {Order} from "../entity/Order";
import {ProductsLists} from "../entity/ProductsLists";
import {Product} from "../entity/Product";


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



const findOrder = async (req, res, result) => {
    let orders = [];
    for (let order of result) {
        await getRepository(ProductsLists).find({where: {orderId: order.id}}).then((result2) => {
            orders[orders.length] = {
                "price": order.price,
                "order_status": order.order_status,
                "created_at": order.created_at,
                "products": result2
            };
        });
    }
    for (let order of orders) {
        for (let product of order.products) {
            await getRepository(Product).findOne({where: {id: product.productId}}).then((result2) => {
                product.name = result2.name;
            });
        }
    }
    res.json(orders);
}

const getOrder = async (req, res) => {
    await getRepository(Order).find({where: {userId: req.user.id}})
        .then((result) => {
            findOrder(req, res, result);
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
