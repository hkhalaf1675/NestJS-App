import { Post } from "src/modules/post/entities/post.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'postreacts'
})
export class PostReact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false
    })
    reactType: string;

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
