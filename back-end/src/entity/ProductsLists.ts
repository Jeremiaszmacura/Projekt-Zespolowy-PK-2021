import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import {Product} from "./Product";

@Entity()
export class ProductsLists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_order: number;

    @Column()
    id_product: number;

    @Column()
    quantity: number;

    @ManyToOne(type => Order, order => order.productsLists)
    order: Order;

    @ManyToOne(type => Product, product => product.productsLists)
    product: Product;

}