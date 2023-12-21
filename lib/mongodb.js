import { MongoClient } from 'mongodb';

let cachedClient = null;

async function connectToDatabase(uri) {
    if (cachedClient) {
        return cachedClient;
    }

    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    cachedClient = client;
    return client;
}

async function insertBlog({ title, content, author, category, user }) {
    const client = await connectToDatabase(process.env.MONGODB_URI);
    const db = client.db();
    const result = await db.collection('blogs').insertOne({ title, content, author, category, user });
    return result.insertedId;
}

export { connectToDatabase, insertBlog };
