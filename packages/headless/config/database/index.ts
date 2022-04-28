const { DB, MONGODB_URI } = process.env;
export const dbConfig = {
    mongodb: {
        URI: MONGODB_URI || 'mongodb://localhost:27017/bs-commerce-dev'
    },
    db: DB || 'MONGO'
}
