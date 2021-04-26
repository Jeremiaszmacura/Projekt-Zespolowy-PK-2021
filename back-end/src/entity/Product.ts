import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import {ProductsLists} from "./ProductsLists";
import {SuppliesLists} from "./SuppliesLists";
import {Comment} from "./Comment";
import {Category} from "./Category";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    id_category: number;

    @Column('double precision')
    price: number;

    @Column()
    description: string;

    @Column()
    pluses: number;

    @Column()
    minuses: number;

    @Column()
    visited: number;

    @Column()
    quantity: number;

    @Column('double precision')
    vat: number;

    @OneToMany(type => ProductsLists, productsLists => productsLists.id_product)
    productsLists: ProductsLists[];

    @OneToMany(type => SuppliesLists, suppliesLists => suppliesLists.id_product)
    suppliesLists: SuppliesLists[];

    @OneToMany(type => Comment, comment => comment.id_product)
    comments: Comment[];

    @ManyToOne(type => Category, category => category.products)
    category: Category;

}