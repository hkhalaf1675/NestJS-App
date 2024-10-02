import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Admin } from "./admin.entity";

@Entity({
    name: 'roles'
})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'token',
        unique: true,
        nullable: false
    })
    token: string;

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false
    })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany((type) => Admin, (admin) => admin.role)
    admins: Admin[];
}
