'use client'
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import bio1 from '../../assets/The Biosphere Mela/1.JPG';
import bio2 from '../../assets/The Biosphere Mela/2.JPG';
import bio3 from '../../assets/The Biosphere Mela/3.JPG';
import bio4 from '../../assets/The Biosphere Mela/4.JPG';
import bio5 from '../../assets/The Biosphere Mela/5.JPG';
import bio6 from '../../assets/The Biosphere Mela/6.JPG';
import bio7 from '../../assets/The Biosphere Mela/7.JPG';
import bio8 from '../../assets/The Biosphere Mela/8.JPG';
import bio9 from '../../assets/The Biosphere Mela/9.JPG';
import bio10 from '../../assets/The Biosphere Mela/10.JPG';

const NextJsCarousel = () => {
    const images = [
        {
            title: 'The Biosphere Mela',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 2',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 3',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 4',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 5',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 6',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 7',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 8',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 9',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
        {
            title: 'Event 10',
            images: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6,
                bio7,
                bio8,
                bio9,
                bio10,
            ]
        },
    ];

    return (
        <div className='bg-green-200 h-full text-center'>
            <h1 className="text-4xl font-bold mb-8 pt-6 text-black">Events Gallery</h1>
            <div className="h-full max-w-[750px] mx-auto p-4 bg-green-200">
                {images.map((event, eventIndex) => (
                    <div key={eventIndex}>
                        <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000}>
                            {event.images.map((imageUrl, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg">
                                    <Image src={imageUrl} alt={`image${index + 1}`} className="w-full h-100 object-cover" />
                                </div>
                            ))}
                        </Carousel>
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextJsCarousel;
