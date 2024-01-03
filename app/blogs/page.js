'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Image, Skeleton } from '@nextui-org/react';

const useClient = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/get-blogs', { method: 'GET' });

                if (!response.ok) {
                    throw new Error(`Failed to fetch blogs: ${response.statusText}`);
                }

                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError('Failed to fetch blogs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { blogs, loading, error };
};

const BlogCard = ({ blog }) => (
    <Card className="py-4">
        <CardBody className="overflow-visible">
            <Image alt={blog.title} className="object-cover rounded-xl" src={blog.coverImage} width="full" />
        </CardBody>
        <CardHeader className="flex-col items-start">
            <h2 className="font-bold text-large">{blog.title}</h2>
            <small className="text-default-500">{blog.content.slice(0, 200) + '...'}</small>
            <div className="flex items-center space-x-20 lg:space-x-60 ">
                <p className="text-tiny uppercase font-bold">{blog.date.slice(0, 10)}</p>
                <a href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
                    Read more
                </a>
            </div>
        </CardHeader>
    </Card>
);

const NatureBlogsPage = () => {
    const { blogs, loading, error } = useClient();

    return (
        <div className="bg-green-200 h-screen flex flex-col justify-start items-center text-black font-sans px-4 py-6">
            <h1 className="text-4xl font-bold mb-8 mt-0">Nature Blogs</h1>
            {loading ? (
                <div className="flex justify-center gap-6">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="w-[250px] mx-2 my-4 p-4">
                            <Card className="w-[250px] h-[300px] space-y-5 p-4" radius="lg">
                                <Skeleton className="rounded-lg">
                                    <div className="h-24 rounded-lg bg-default-300"></div>
                                </Skeleton>
                                <div className="space-y-3">
                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-2/5 rounded-lg">
                                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                    </Skeleton>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NatureBlogsPage;
