import { Post } from "./post.entity";
import { User } from "./user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'postcomments'
})
export class PostComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        nullable: false
    })
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => User, (user) => user.comments, {
        nullable: false
    })
    user: User;

    @ManyToOne((type) => Post, (post) => post.comments, {
        nullable: false
    })
    post: Post;
}
