import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Ratings {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'int',
    }) 
    product_id: number;
    
    @Column({
        type: 'int',
    }) 
    user_id: number;

    @Column({
        type: 'float',
    }) 
    rating: number;

    @Column({
        type: 'varchar',
    }) 
    message: number;

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