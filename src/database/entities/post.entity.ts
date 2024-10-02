import { Category } from "./category.entity";
import { PostComment } from "./post-comment.entity";
import { PostReact } from "./post-react.entity";
import { SaveListPost } from "./save-list-post.entity";
import { User } from "./user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'posts'
})
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

   @Column({
        type: 'varchar',
        nullable: false
   })
   title: string;

   @Column({
        type: 'text',
        nullable: false
   })
   content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.posts, {
        nullable: false
    })
    user: User;

    @ManyToOne(() => Category, (category) => category.posts, {
        nullable: false
    })
    category: Category;

    @OneToMany((type) => SaveListPost, (savePost) => savePost.post)
    saveLists: SaveListPost[];

    @OneToMany((type) => PostComment, (comment) => comment.post)
    comments: PostComment[];

    @OneToMany((type) => PostReact, (react) => react.post)
    reacts: PostReact[];
}
