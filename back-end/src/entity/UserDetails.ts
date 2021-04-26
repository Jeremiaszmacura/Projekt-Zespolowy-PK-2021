import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne} from "typeorm";
import {User} from "./User";

export type UserRoleType = "gosc" | "klient" | "admin" | "magazynier"

@Entity()
export class UserDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    code: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    phone: number;

    @Column({
        type: "enum",
        enum: ["gosc", "klient", "admin", "magazynier"]
    })
    role: UserRoleType;

}