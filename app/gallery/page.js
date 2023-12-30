'use client'
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import images from './events';

const NextJsCarousel = () => {
    return (
        <div className='bg-green-200 h-full text-center'>
            <h1 className="text-4xl font-bold mb-8 pt-6 text-black">Events Gallery</h1>
            <div className="h-full max-w-[750px] mx-auto p-4 bg-green-200">
                {images.map((event, eventIndex) => (
                    <div key={eventIndex}>
                        <h2 className="text-2xl font-bold mb-4 text-black">{event.title}</h2>
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
