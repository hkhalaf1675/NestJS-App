import { Post } from "src/modules/post/entities/post.entity";
import { SaveList } from "src/modules/save-list/entities/save-list.entity";
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
