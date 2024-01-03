'use client';
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Card, Skeleton } from '@nextui-org/react';
import images from './events';

const EventPreloader = () => {
    return (
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
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
    );
};

const NextJsCarousel = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        const preloaderTimeout = setTimeout(() => {
            setShowPreloader(false);
        }, 5000);

        return () => {
            clearTimeout(preloaderTimeout);
        };
    }, []); // Run once on component mount

    const handleImageLoad = (e) => {
        e.target.onload && e.target.onload(e);
        setLoadedImages((prevCount) => prevCount + 1);
    };

    const allImagesLoaded = loadedImages === images.reduce((total, event) => total + event.images.length, 0);

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
                                    <Image
                                        src={imageUrl}
                                        alt={`image${index + 1}`}
                                        className="w-full h-100 object-cover"
                                        onLoad={handleImageLoad}
                                    />
                                </div>
                            ))}
                            {showPreloader && <EventPreloader />}
                        </Carousel>
                        {allImagesLoaded && !showPreloader && <p>All images loaded!</p>}
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextJsCarousel;
