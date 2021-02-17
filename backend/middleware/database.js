import { MongoClient } from 'mongodb';

const dbName = process.env.DB_NAME;

export const dbClient = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export const connectToDb = async () => {
    if (!dbClient.isConnected()) await dbClient.connect();
    return dbClient.db(dbName);
}

async function databaseMiddleware(req, res, next) {
    if (!dbClient.isConnected()) await dbClient.connect();
    req.db = dbClient.db(dbName);
    return next()
}


export default databaseMiddleware;