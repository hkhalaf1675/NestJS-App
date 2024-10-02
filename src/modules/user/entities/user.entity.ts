import { PostComment } from "src/modules/post-comment/entities/post-comment.entity";
import { PostReact } from "src/modules/post-react/entities/post-react.entity";
import { Post } from "src/modules/post/entities/post.entity";
import { SaveList } from "src/modules/save-list/entities/save-list.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    userName: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false
    })
    role: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    country : string;

    @Column({
        type: 'date',
        nullable: true
    })
    birthDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany((type) => SaveList, (saveList) => saveList.user)
    saveLists: SaveList[];

    @OneToMany((type) => PostComment, (comment) => comment.user)
    comments: PostComment[];

    @OneToMany((type) => PostReact, (react) => react.user)
    reacts: PostReact[];
}