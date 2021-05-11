import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne} from "typeorm";
import {ProductsLists} from "./ProductsLists";
import {User} from "./User";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column()
    order_status: string;

    @Column('double precision')
    price: number;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => ProductsLists, productsLists => productsLists.id_order)
    productsLists: ProductsLists[];

    @ManyToOne(type => User, user => user.orders)
    user: User;

}