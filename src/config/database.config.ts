import { join } from "path";

export default() => ({
    databaseConfig: {
        type: process.env.DB_TYPE || 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT ?? '3306', 10,),
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DATABASE || 'nest-app-v04',
        entities: [join(__dirname, '../database/entities/*.entity{.ts,.js}')],
        synchronize: (process.env.DB_SYNCHRONIZE === "true" ) || false,
        autoLoadModels: (process.env.DB_AUTO_LOAD_MODELS  === "true") || false
    }
});