import { PostComment } from "./post-comment.entity";
import { PostReact } from "./post-react.entity";
import { Post } from "./post.entity";
import { SaveList } from "./save-list.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class User {
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

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany((type) => SaveList, (saveList) => saveList.user)
    saveLists: SaveList[];

    @OneToMany((type) => PostComment, (comment) => comment.user)
    comments: PostComment[];

    @OneToMany((type) => PostReact, (react) => react.user)
    reacts: PostReact[];
}
