import { Category } from "src/modules/category/entities/category.entity";
import { PostComment } from "src/modules/post-comment/entities/post-comment.entity";
import { PostReact } from "src/modules/post-react/entities/post-react.entity";
import { SaveListPost } from "src/modules/save-list-post/entities/save-list-post.entity";
import { User } from "src/modules/user/entities/user.entity";
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
