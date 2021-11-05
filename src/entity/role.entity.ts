import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: 'int',
    }) 
    status: number;
    
    @Column({
        type: 'varchar'
    }) 
    display_name: string;

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
  
    //relationships
    @ManyToOne( () => Users, (user) => user.role_id)
    public user: Users;
}