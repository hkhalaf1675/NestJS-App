export default() => ({
    database: {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: false,
        autoLoadEntities: false,
        entities: ['src/modules/**/entities/*.entity{.ts,.js}'],
        migrations: ['src/migrations/*{.ts,.js'],
        cli: {
            migrationsDir: 'src/migrations'
        }
    },
    jwt: {
        global: true,
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
});