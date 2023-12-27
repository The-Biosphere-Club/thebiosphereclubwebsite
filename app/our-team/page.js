'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Arya from '../../assets/team/Arya.jpg';
import Ashima from '../../assets/team/Ashima.jpg';
import Charutha from '../../assets/team/Charutha.jpg';
import Devadharshini from '../../assets/team/Devadharshini.jpg';
import Lahari from '../../assets/team/Lahari.jpeg';
import Manish from '../../assets/team/Manish.jpg';
import Monisha from '../../assets/team/Monisha.jpeg';
import Ojas from '../../assets/team/Ojas.JPG';
import Sai_Prasad from '../../assets/team/Sai_Prasad.png';
import Sairam from '../../assets/team/Sairam.jpeg';
import Shiv from '../../assets/team/Shiv.jpg';
import Shruti from '../../assets/team/Shruti.JPG';
import Siddhardh from '../../assets/team/Siddhardh.jpeg';
import Varun from '../../assets/team/Varun.jpg';

const teamMembers = [
    { name: 'Lahari', image: Lahari, description: 'Co-Founder' },
    { name: 'Monisha', image: Monisha, description: 'Co-Founder' },
    { name: 'Arya', image: Arya, description: 'Secretory' },
    { name: 'Sairam', image: Sairam, description: 'Joint Secretory' },
    { name: 'Siddhardh', image: Siddhardh, description: 'Treasurer' },
    { name: 'Ashima', image: Ashima, description: 'MOC Lead' },
    { name: 'Charutha', image: Charutha, description: 'Design Lead' },
    { name: 'Devadharshini', image: Devadharshini, description: 'Design Lead' },
    { name: 'Manish', image: Manish, description: 'Management Lead' },
    { name: 'Ojas', image: Ojas, description: 'Tech Lead' },
    { name: 'Sai_Prasad', image: Sai_Prasad, description: 'Content Lead' },
    { name: 'Shiv', image: Shiv, description: 'Creative & Media Lead' },
    { name: 'Shruti', image: Shruti, description: 'Management Lead' },
    { name: 'Varun', image: Varun, description: 'Content Lead' },
    { name: 'Abhiram', image: Varun, description: 'Event Planner Lead' },
    { name: 'Prateek', image: Varun, description: 'Outreach Lead' },
];

const Gallery = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for demonstration purposes (you can replace this with your actual data fetching logic)
        const fetchData = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-green-200 text-center">
            <h1 className="text-4xl font-bold mb-8 pt-2 text-black">Our Team</h1>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <>
                    <h3 className="text-3xl font-bold mb-8 mt-0 text-black">Founders</h3>
                    <div className="flex flex-wrap justify-evenly">
                        {teamMembers.slice(0, 2).map((member, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a>
                                        <Image className="rounded-t-lg w-full h-90 object-cover" src={member.image} alt={`${member.name}'s Photo`} />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <h3 className="text-3xl font-bold mb-8 mt-0 text-black">Core</h3>
                    <div className="flex flex-wrap justify-evenly">
                        {teamMembers.slice(2, 5).map((member, index) => (
                            <div key={index} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-2">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a>
                                        <Image className="rounded-t-lg w-full h-90 object-cover" src={member.image} alt={`${member.name}'s Photo`} />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="flex flex-wrap justify-evenly">
                        {teamMembers.slice(5).map((member, index) => (
                            <div key={index} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-2">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a>
                                        <Image className="rounded-t-lg w-full h-90 object-cover" src={member.image} alt={`${member.name}'s Photo`} />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Gallery;