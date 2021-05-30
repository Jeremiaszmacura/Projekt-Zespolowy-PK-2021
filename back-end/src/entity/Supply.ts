import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";
import {SuppliesLists} from "./SuppliesLists";
export type SupplyStatus = "zamowione" | "zrealizowane"

@Entity()
export class Supply {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["zamowione", "zrealizowane"],
        default: "zamowione"
    })
    supply_status: SupplyStatus;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => SuppliesLists, suppliesLists => suppliesLists.supplyId)
    suppliesLists: SuppliesLists[];

}