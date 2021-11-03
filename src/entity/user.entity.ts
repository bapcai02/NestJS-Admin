/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn() 
    id: number;

    @Column() 
    name: string;
    
    @Column() 
    role_id: number;

    @Column() 
    email: string;

    @Column() 
    password: string;

    @CreateDateColumn() 
    created_at: Date;

    @UpdateDateColumn() 
    updated_at: Date;
}