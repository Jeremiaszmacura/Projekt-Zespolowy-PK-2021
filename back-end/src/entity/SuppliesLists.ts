import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import {Supply} from "./Supply";

@Entity()
export class SuppliesLists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_supply: number;

    @Column()
    id_product: number;

    @Column()
    quantity: number;

    @ManyToOne(type => Product, product => product.suppliesLists)
    product: Product;

    @ManyToOne(type => Supply, supply => supply.suppliesLists)
    supply: Supply;

}