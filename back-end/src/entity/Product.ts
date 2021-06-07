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
    mark: string;

    @Column()
    src: string;

    @Column()
    categoryId: number;

    @Column('double precision')
    price: number;

    @Column()
    description: string;

    @Column({default: 0})
    pluses: number;

    @Column({default: 0})
    minuses: number;

    @Column({default: 0})
    visited: number;

    @Column()
    quantity: number;

    @Column('double precision', {default: 20})
    vat: number;

    @OneToMany(type => ProductsLists, productsLists => productsLists.productId)
    productsLists: ProductsLists[];

    @OneToMany(type => SuppliesLists, suppliesLists => suppliesLists.productId)
    suppliesLists: SuppliesLists[];

    @OneToMany(type => Comment, comment => comment.productId)
    comments: Comment[];

    @ManyToOne(type => Category, category => category.products)
    category: Category;

}