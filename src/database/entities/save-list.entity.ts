import { SaveListPost } from "./save-list-post.entity";
import { User } from "./user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'savelists'
})
export class SaveList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => User, (user) => user.saveLists, {
        nullable: false
    })
    user: User;

    @OneToMany((type) => SaveListPost, (savePost) => savePost.saveList)
    savedPosts: SaveListPost[];
}
