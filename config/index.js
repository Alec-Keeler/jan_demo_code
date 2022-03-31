module.exports = {
    port: process.env.PORT || 8081,
    environment: process.env.NODE_ENV || 'development',
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
    }
}