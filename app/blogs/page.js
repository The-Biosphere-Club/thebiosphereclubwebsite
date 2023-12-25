'use client'
import React, { useState,  useEffect } from 'react';
const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md transition-transform hover:scale-105">
            <img
                src={blog.coverImage} // Assuming there's a cover image in your blog data
                alt={blog.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-extrabold text-green-800 mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{blog.date}</span>
                {/* Add more details or links if needed */}
                <a href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
                    Read more
                </a>
            </div>
        </div>
    );
};

// Dummy data for testing
const dummyBlogs = [
    {
        id: 1,
        title: "Exploring the Beauty of National Parks",
        description:
            "Discover the wonders of nature by exploring the breathtaking landscapes of national parks.",
        coverImage: "https://placekitten.com/800/400", // Placeholder image URL
        date: "January 15, 2023",
    },
    {
        id: 2,
        title: "The Wildlife Safari Adventure",
        description:
            "Embark on a thrilling wildlife safari and witness the diversity of animals in their natural habitat.",
        coverImage: "https://placekitten.com/801/400", // Placeholder image URL
        date: "February 5, 2023",
    },
    {
        id: 3,
        title: "Conserving Oceans and Marine Life",
        description:
            "Explore the importance of conserving oceans and protecting marine life for a sustainable future.",
        coverImage: "https://placekitten.com/802/400", // Placeholder image URL
        date: "March 20, 2023",
    },
    {
        id: 4,
        title: "Conserving Oceans and Marine Life",
        description:
            "Explore the importance of conserving oceans and protecting marine life for a sustainable future.",
        coverImage: "https://placekitten.com/802/400", // Placeholder image URL
        date: "March 20, 2023",
    },
    {
        id: 5,
        title: "Conserving Oceans and Marine Life",
        description:
            "Explore the importance of conserving oceans and protecting marine life for a sustainable future.",
        coverImage: "https://placekitten.com/802/400", // Placeholder image URL
        date: "March 20, 2023",
    },
    {
        id: 6,
        title: "Conserving Oceans and Marine Life",
        description:
            "Explore the importance of conserving oceans and protecting marine life for a sustainable future.",
        coverImage: "https://placekitten.com/802/400", // Placeholder image URL
        date: "March 20, 2023",
    },
    // Add more dummy blogs as needed
];

const NatureBlogsPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/get-blogs', { method: 'GET' });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setBlogs(data);
                } else {
                    console.error('Failed to fetch blogs:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-green-500 h-screen flex flex-col justify-start items-center text-white font-sans px-4 py-6">
            <h1 className="text-4xl font-bold mb-8 mt-0">Nature Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default NatureBlogsPage;