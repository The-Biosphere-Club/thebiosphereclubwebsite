// BlogCard.js
import React from "react";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <img
                src={blog.coverImage} // Assuming there's a cover image in your blog data
                alt={blog.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            {/* Add more details or links if needed */}
        </div>
    );
};

// Dummy data for testing
const dummyBlog = {
    id: 1,
    title: "Exploring the Beauty of National Parks",
    description: "Discover the wonders of nature by exploring the breathtaking landscapes of national parks.",
    coverImage: "https://placekitten.com/800/400", // Placeholder image URL
};

// Example usage of the BlogCard with dummy data
const BlogCardWithDummyData = () => {
    return <BlogCard blog={dummyBlog} />;
};

export default BlogCardWithDummyData;
