'use client'
import React, { useState } from 'react';
import Plantation from '../../assets/Event Posters/Plantation.jpeg';
import Decode from '../../assets/Event Posters/decode.jpg';
import mela from '../../assets/Event Posters/Mela.jpeg';
import agriculture from '../../assets/Event Posters/Agriculture.jpeg';
import sparrow from '../../assets/Event Posters/Sparrows.jpeg';
import fiesta from '../../assets/Event Posters/wildlife_fiesta.jpeg';
import Image from 'next/image';
const Card = ({ title, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-5 max-w-4xl w-60 lg:w-full aspect-w-16 aspect-h-9">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-120 w-full object-cover md:w-80 aspect-w-16 aspect-h-9 cursor-pointer"
            src={imageUrl}
            alt="Card Image"
            onClick={handleExpandClick}
          />
        </div>
        <div className="p-8">
          <p
            className="block mt-1 text-lg leading-tight font-medium text-black"
          >
            {title}
          </p>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-75"
            onClick={handleCloseClick}
          ></div>
          <div className="absolute bg-white p-8 max-w-3xl rounded-lg">
            <Image
              className="w-80 h-120 object-cover"
              src={imageUrl}
              alt="Expanded Image"
            />
            <button
              className="absolute top-4 right-4 text-white cursor-pointer"
              onClick={handleCloseClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CardList = () => {

  const cardData = [
    {
      title: 'The Biosphere Mela',
      description: 'The Biosphere Mela aimed to create awareness about the importance of environmental conservation and sustainable living. It was a one-day event filled with engaging activities, quizzes, and games, designed to inspire students and the college community to take action to preserve our natural surroundings.The Biosphere Mela provided an excellent opportunity for students to connect with like-minded individuals, learn more about environmental issues, and foster a sense of responsibility towards our planet.',
      imageUrl: mela,
    },
    {
      title: 'Session on Sparrows',
      description: 'The event was an awareness program about sparrows, their decline, and what to be done in order to save them. In the event Dr.A.Sadhana Rajkumar Garu has shared about her life experiences with sparrows, why she started helping them, her goal in the future, her contribution towards helping them and many more. Dr.A.Sadhana Rajkumar Garu proudly stated that she has made over 10,000 nests for the sparrows made out of different materials.',
      imageUrl: sparrow,
    },
    {
      title: 'Century Plantation Drive',
      description: 'The Biosphere Club of Vellore Institute of Technology Chennai had organized a plantation drive called the “The Century Plantation Drive” inside the campus on 27th of March create awareness among students about the importance of trees and their contribution towards the environment. The saplings were provided by the college authorities ,around 140 saplings were planted behind C block as a part of the plantation drive. 102 jamun plants and other saplings were planted.',
      imageUrl: Plantation,
    },
    {
      title: 'Decode',
      description: 'On 4th March, VIT Chennai hosted an event called ‘D-Eco-De’ on the occasion of Vibrance, which was organised by Biosphere Club and Tech Researchers Club. The event aimed to raise awareness about the environment and technology among the participants. The event saw the participation of 75 teams, and the competition included two games- ‘Wikigame’ and ‘Google Feud’.',
      imageUrl: Decode,
    },
    {
      title: 'Saga of Indian Agriculture',
      description: 'Saga of Indian Agriculture, was a webinar with Dr. Awasthy Chandrakumar, A researcher with ICAR. Were the audience was enlightened with the prospects and challenges of agriculture in India and the stages that happened in the Indian Agriculture. The discussion also contained information about role of climate change on agriculture and the positive roles on Information and communication technology in agriculture. There were also QNA session with the audience. All in all it was a very informative and memorable experience.',
      imageUrl: agriculture,
    },
    {
      title: 'Wildlife Fiesta',
      description: 'The Biosphere Club organized its first physical event in VIT, Chennai as Wildlife Fiesta 2022 from 3rd October,2022 to 6th October,2022 to generate environment awareness and celebrate the national wildlife. For this event a series of events were organised, which included Wildlife Frames, Plantation Drive and Open Mic. For Wildlife Frames students, faculties and staffs took photos with handcrafted frames which were based on the theme of land biodiversity and aquatic life. A Plantation drive was conducted by The Biosphere Club in collaboration with Horticulture Department for VIT, Chennai and Linux Club, VIT Chennai, within the campus of VIT, Chennai.',
      imageUrl: fiesta,
    },
  ];

  return (
    <div className="bg-green-200 py-5 h-full text-center">
      <h1 className="text-4xl font-bold mb-8 pt-6 text-black">Events Gallery</h1>
      <div className="flex flex-col items-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
