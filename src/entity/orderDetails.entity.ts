import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class OrderDetails {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'int',
    }) 
    order_id: number;
    
    @Column({
        type: 'int'
    }) 
    product_id: number;

    @Column({
        type: 'int'
    }) 
    seller_id: number;

    @Column({
        type: 'int'
    }) 
    qty: number;

    @Column({
        type: 'float'
    }) 
    price: number;

    @Column({
        type: 'varchar'
    }) 
    address_ship: string;
    
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