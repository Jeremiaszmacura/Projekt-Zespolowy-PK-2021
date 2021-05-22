import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import {Product} from "./Product";

@Entity()
export class ProductsLists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderId: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @ManyToOne(type => Order, order => order.productsLists)
    order: Order;

    @ManyToOne(type => Product, product => product.productsLists)
    product: Product;

}