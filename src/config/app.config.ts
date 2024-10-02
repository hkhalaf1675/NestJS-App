export default() => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    jwt: {
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
    }
});