import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'varchar',
    }) 
    category_name: string;
    
    @Column({
        type: 'text'
    }) 
    category_description: string;

    @Column({
        type: 'int'
    }) 
    category_status: number;

    @Column({
        type: 'varchar'
    }) 
    category_slug: string;

    @Column({
        type: 'varchar'
    }) 
    category_keyword: string;

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