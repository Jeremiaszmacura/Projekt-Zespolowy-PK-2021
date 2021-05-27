import {getRepository} from "typeorm";
import {Order} from "../entity/Order";
import {User} from "../entity/User";
import {UserDetails} from "../entity/UserDetails";
import {ProductsLists} from "../entity/ProductsLists";


const save = async (req, res) => {
    /*
    Przesyłają listę produktów {
        price: price,
        products: [
            {
                productId: id1,
                quantuty: quantity1
            },
            {
                productId: id2,
                quantuty: quantity2
            },
            {
                productId: id3,
                quantuty: quantity3
            },
            {
                productId: id4,
                quantuty: quantity4
            }
        ]
    }
    Tworzę rekord order
    Tworzę listę zakupów w products_lists (tyle rekordów ile elementów w tablicy)
     */

    getRepository(Order).save({'price': req.body.price, 'userId': req.user.id}).then((result) =>
    {
        const orderId = result.id;
        req.body.products.forEach(function (product) {
            product.orderId = orderId;
            getRepository(ProductsLists).save(product);
        });
    });
}

module.exports = {
    save
};
