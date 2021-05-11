import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";
import {SuppliesLists} from "./SuppliesLists";

@Entity()
export class Supply {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    supply_status: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => SuppliesLists, suppliesLists => suppliesLists.id_supply)
    suppliesLists: SuppliesLists[];

}