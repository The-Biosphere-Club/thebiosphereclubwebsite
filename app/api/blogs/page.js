import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const client = await connectToDatabase(process.env.MONGODB_URI);
                const db = client.db();
                const blogs = await db.collection('Cluster0').find({}).toArray();

                res.status(200).json(blogs);
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        case 'POST':
            try {
                const { title, content, author, category } = req.body;
                const session = await getSession({ req });

                if (!session) {
                    return res.status(401).json({ error: 'Unauthorized' });
                }

                const user = { id: session.user.id, name: session.user.name, email: session.user.email };

                const result = await insertBlog({ title, content, author, category, user });

                res.status(201).json({ message: 'Blog successfully saved!', insertedId: result });
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        default:
            res.status(405).json({ error: 'Method Not Allowed' });
            break;
    }
}
