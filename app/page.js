// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-300 min-h-screen flex flex-col justify-center items-center text-white font-sans">
      <section className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">Nature Conservation Club</h1>
        <p className="text-lg">Preserving Nature for a Sustainable Future</p>
      </section>
      <section className="bg-white p-8 rounded-md shadow-md text-center max-w-xl">
        <p className="text-xl mb-4">Welcome to our Nature Conservation Club!</p>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero.
        </p>
      </section>
      <section className="mt-8 bg-white p-8 rounded-md shadow-md max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero.
        </p>
      </section>
      <section className="mt-8 bg-white p-8 rounded-md shadow-md max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg text-gray-600">Stay tuned for upcoming events and activities.</p>
      </section>
    </div>
  );
};

export default Home;
