import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Sellers {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'int',
    }) 
    customer_id: number;
    
    @Column({
        type: 'varchar'
    }) 
    shop_info: string;

    @Column({
        type: 'varchar'
    }) 
    shop_name: string;

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