import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'varchar',
    }) 
    Order_Code: number;
    
    @Column({
        type: 'int',
    }) 
    user_id: number;

    @Column({
        type: 'int',
    }) 
    customer_id: number;

    @Column({
        type: 'int',
    }) 
    ship_id: number;

    @Column({
        type: 'int',
    }) 
    payment: number;
    @Column({
        type: 'int',
    }) 
    status: number;

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