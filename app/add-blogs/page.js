'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

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
                console.error('Please fill out all fields');
                return;
            }

            // Ensure there is an active session
            if (!session) {
                console.error('User not authenticated.');
                return;
            }

            // Use the MongoDB client to save the new blog
            const response = await fetch('/api/post-blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'use-client': true,  // Add the 'use-client' header
                },
                body: JSON.stringify({
                    title,
                    content,
                    author,
                    category,
                    userId: session.user.id,
                    userName: session.user.name,
                    coverImage: 'https://placekitten.com/802/400', 
                }),
            });

            // Check if the API call was successful
            if (response.ok) {
                window.alert('Blog successfully saved!');
                console.log('Blog successfully saved!');
                // Optionally, you can redirect the user to the blog list page or perform any other action.
            } else {
                window.alert('Failed to save the blog.');
                console.error('Failed to save the blog.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            console.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-green-200 min-h-screen flex flex-col justify-center items-center font-sans p-4 text-black">
            <h1 className="text-4xl font-bold mb-8 mt-0">Add New Blog</h1>
            <form className="bg-white p-8 rounded-md shadow-md w-[50%]">
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
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewBlogPage;
