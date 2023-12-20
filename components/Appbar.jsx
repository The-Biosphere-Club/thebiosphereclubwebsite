import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
    return (
        <header className="bg-gradient-to-b from-white to-gray-200 shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="space-x-4">
                    <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="/events" className="text-gray-600 hover:text-gray-800">Events</a>
                    <a href="/team" className="text-gray-600 hover:text-gray-800">Our Team</a>
                    <a href="/gallery" className="text-gray-600 hover:text-gray-800">Gallery</a>
                    <a href="/blogs" className="text-gray-600 hover:text-gray-800">Blogs</a>
                </nav>
                <SigninButton />
            </div>
        </header>
    );
};

export default Appbar;
