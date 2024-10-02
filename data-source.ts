import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: false,
    entities: ['src/modules/**/entities/*.entity.ts'],
    migrations: ['src/migrations'],
    subscribers: [],
})
