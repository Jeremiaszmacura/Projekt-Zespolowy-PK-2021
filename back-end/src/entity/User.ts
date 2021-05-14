import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";
import {Order} from "./Order";
import {Comment} from "./Comment";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => Order, order => order.userId)
    orders: Order[];

    @OneToMany(type => Comment, comment => comment.userId)
    comments: Comment[];

}