'use client'
import React, { useState, useEffect } from 'react';

const BlogPage = ({ params }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/get-blogs/${params.id}`, { method: 'GET' });
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [params.id]);

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
            {blog ? (
                <>
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-md" />
                    <h1 className="text-4xl font-bold mb-4 text-black">{blog.title}</h1>
                    <p className="text-gray-600 mb-4">{blog.content}</p>
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-500">Author: {blog.author}</p>
                        <p className="text-gray-500">Category: {blog.category}</p>
                        <p className="text-gray-500">Date: {new Date(blog.date).toLocaleDateString()}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogPage;

