import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Product} from "./Product";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Product, product => product.id_category)
    products: Product[];

}