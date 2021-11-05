import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Roles } from "./role.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'varchar',
    }) 
    name: string;
    
    @Column({
        type: 'int'
    }) 
    role_id: number;

    @Column({
        type: 'varchar',
        unique: true
    }) 
    email: string;

    @Column({
        type: 'varchar'
    }) 
    password: string;

    @CreateDateColumn({
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    created_at?: Date;

    @UpdateDateColumn({
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP(6)", 
        onUpdate: "CURRENT_TIMESTAMP(6)" 
    })
    updated_at?: Date;
}