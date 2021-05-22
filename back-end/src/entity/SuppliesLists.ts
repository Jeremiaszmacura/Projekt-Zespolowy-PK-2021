import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import {Supply} from "./Supply";

@Entity()
export class SuppliesLists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    supplyId: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @ManyToOne(type => Product, product => product.suppliesLists)
    product: Product;

    @ManyToOne(type => Supply, supply => supply.suppliesLists)
    supply: Supply;

}