/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryColumn() id: number;
    @Column({type: 'varchar'}) name: string;
    @Column() role_id: number;
    @Column({type: 'varchar'}) email: string;
    @Column({type: 'varchar'}) password: string;
    @CreateDateColumn() created_at: Date;
    @UpdateDateColumn() updated_at: Date;
}