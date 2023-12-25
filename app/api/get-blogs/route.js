import Blogs from "@/models/blogs";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDatabase()

        const blogs = await Blogs.find({})

        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
} 