import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne} from "typeorm";
import {ProductsLists} from "./ProductsLists";
import {User} from "./User";

export type OrderStatus = "nieoplacone" | "oplacone" | "dostarczone"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["nieoplacone", "oplacone", "dostarczone"],
        default: "nieoplacone"
    })
    order_status: OrderStatus;

    @Column({
        type: "double precision",
        nullable: true
    })
    price: number;

    @Column()
    userId: number;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => ProductsLists, productsLists => productsLists.orderId)
    productsLists: ProductsLists[];

    @ManyToOne(type => User, user => user.orders)
    user: User;

}