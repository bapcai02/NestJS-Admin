import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'int',
    }) 
    category_id: number;
    
    @Column({
        type: 'int',
    }) 
    brand_id: number;

    @Column({
        type: 'int',
    }) 
    seller_id: number;

    @Column({
        type: 'varchar'
    }) 
    product_name: string;

    @Column({
        type: 'varchar'
    }) 
    slug: string;

    @Column({
        type: 'text'
    }) 
    product_desc: string;
    
    @Column({
        type: 'text'
    })
    product_content: string;

    @Column({
        type: 'float'
    })
    product_price: number;
    
    @Column({
        type: 'int'
    }) 
    sale: number;
    
    @Column({
        type: 'int'
    }) 
    product_status: number;

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