import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity({
    name: 'admins'
})
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'userName',
        unique: true,
        nullable: false
    })
    userName: string;

    @Column({
        type: 'varchar',
        name: 'fullName',
        nullable: true
    })
    fullName: string;

    @Column({
        type: 'varchar',
        name: 'email',
        unique: true,
        nullable: false
    })
    email: string;

    @Column({
        type: 'varchar',
        name: 'pasword',
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        name: 'country',
        nullable: true
    })
    country: string;

    @Column({
        type: 'varchar',
        name: 'phone',
        nullable: true
    })
    phone: string;

    @Column({
        type: 'date',
        name: 'birthDate',
        nullable: true
    })
    birthDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => Role, (role) => role.admins)
    role: Role;
}
