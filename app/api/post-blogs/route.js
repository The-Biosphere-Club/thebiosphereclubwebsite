import Blogs from "@/models/blogs";
import { connectToDatabase } from "@/utils/database";

export const POST = async (request) => {
    const { title, content, author, category, userId, userName, coverImage } = await request.json();

    try {
        await connectToDatabase();
        const Blog = new Blogs({ title, content, author, category, userId, userName, coverImage });

        await Blog.save();
        return new Response(JSON.stringify(Blog), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new blog", { status: 500 });
    }
}