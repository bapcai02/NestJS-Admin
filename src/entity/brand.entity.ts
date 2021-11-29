import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Brands {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'varchar',
    }) 
    brand_name: string;
    
    @Column({
        type: 'text'
    }) 
    brand_description: string;

    @Column({
        type: 'int'
    }) 
    brand_status: number;

    @Column({
        type: 'varchar'
    }) 
    brand_slug: string;

    @Column({
        type: 'varchar'
    }) 
    brand_keyword: string;

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