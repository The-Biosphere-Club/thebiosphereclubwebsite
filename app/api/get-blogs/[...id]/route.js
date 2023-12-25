import Blogs from "@/models/blogs";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase()
        const blogs = await Blogs.findById(params.id)
        if (!blogs) return new Response("Blogs Not Found", { status: 404 });

        return new Response(JSON.stringify(blogs), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}