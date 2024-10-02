import { Post } from "./post.entity";
import { SaveList } from "./save-list.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'savelistposts'
})
export class SaveListPost {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne((type) => SaveList, (saveList) => saveList.savedPosts, {
        nullable: false
    })
    saveList: SaveList;

    @ManyToOne((type) => Post, (post) => post.saveLists, {
        nullable: false
    })
    post: Post[];
}
