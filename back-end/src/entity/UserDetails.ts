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
    house_number: string;

    @Column({nullable: true})
    apartment_number: string;

    @Column()
    phone: string;

    @Column()
    userId: number;

    @Column({
        type: "enum",
        enum: ["gosc", "klient", "admin", "magazynier"],
        default: "klient"
    })
    role: UserRoleType;

}