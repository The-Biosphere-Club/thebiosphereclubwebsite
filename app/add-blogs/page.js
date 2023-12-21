'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';

const NewBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const { data: session } = useSession();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // Form validation
            if (!title || !content || !author || !category) {
                toast.error('Please fill out all fields');
                return;
            }

            // Reset error message
            toast.dismiss();

            // Ensure there is an active session
            if (!session) {
                console.error('User not authenticated.');
                return;
            }

            // Example: Use the MongoDB client to save the new blog.
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                    author,
                    category,
                    user: {
                        id: session.user.id,
                        name: session.user.name,
                        email: session.user.email,
                    },
                }),
            });

            // Example: Check if the API call was successful.
            if (response.ok) {
                toast.success('Blog successfully saved!');
                // Optionally, you can redirect the user to the blog list page or perform any other action.
            } else {
                toast.error('Failed to save the blog.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-green-500 min-h-screen flex flex-col justify-center items-center text-white font-sans p-4 text-black">
            <h1 className="text-4xl font-bold mb-8 mt-0">Add New Blog</h1>
            <form className="bg-white p-8 rounded-md shadow-md w-full">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        rows="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-600">
                        Author:
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={handleAuthorChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
                <Toaster />
            </form>
        </div>
    );
};

export default NewBlogPage;
