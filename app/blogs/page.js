'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const BlogCard = ({ blog }) => {
    console.log(blog);
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible">
                <Image
                    alt={blog.title}
                    className="object-cover rounded-xl"
                    src={blog.coverImage}
                    width="full"
                />
            </CardBody>
            <CardHeader className="flex-col items-start">
                <h2 className="font-bold text-large">{blog.title}</h2>
                <small className="text-default-500">
                    {blog.content.slice(0, 200) + '...'}
                </small>
                <div className="flex items-center space-x-20 lg:space-x-60 ">
                    <p className="text-tiny uppercase font-bold">
                        {blog.date.slice(0, 10)}
                    </p>
                    <a href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
                        Read more
                    </a>
                </div>

            </CardHeader>
        </Card>

    );
};

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
        <div className="bg-green-200 h-screen flex flex-col justify-start items-center text-black font-sans px-4 py-6">
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