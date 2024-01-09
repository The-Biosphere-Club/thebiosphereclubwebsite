import React from 'react';
import Image from 'next/image';
import groupPhoto from '../assets/group_photo.jpeg';
import facultyPhoto from '../assets/maam.jpg';

const HomePage = () => {
  return (
    <div className="homepagebg min-h-screen flex flex-col items-center bg-green-100 text-black overflow-x-hidden pb-10">
      <section id="home" className="container flex flex-col items-center max-w-full">
        <div className="bg-bgcol flex flex-col items-center w-screen">
          <div className="py-7">
            {/* <Image src={BiosphereLogo} alt="Biosphere Logo" width={160} height={160} className="rounded-full" /> */}
          </div>

          <div className="my-3 font-poppins text-xs font-medium md:text-2xl py-5">
            195 Countries | 8 Billion People | 1 Planet
          </div>
          <div className="flex text-2xl py-3 font-poppins text-center mb-10 md:mx-28 md:text-4xl">
            One Planet, One conscious decision to live in harmony
          </div>

          <div className="font-sanchez text-3xl">About Us</div>
          <div className="flex flex-col items-center my-10 bg-gray-100 mx-4 rounded-xl bg-opacity-70 md:mx-20">
            <div className="container flex flex-col-reverse md:flex-row items-center">
              <div className="flex flex-col md:w-full md:mr-6">
                <h1 className='text-xl text-center md:text-left md:pl-5 md:text-3xl'>Our Team</h1>
                <p className="text-xs md:text-sm md:text-base lg:text-xl pl-5">
                  We created our club with the vision to create awareness among people and make an impact by realizing how real the global warming and climate changes are. Join us to build a sustainable environment and leave behind a better place for future generations. Encouraging active participation and spreading hope that small changes do matter. Respecting, Observing, and Understanding of Plants, Animals, Places, and Culture. Getting knowledge and finding new ways to heal the planet.
                </p>
              </div>
              <div className="flex items-center md:w-full">
                <Image src={groupPhoto} className="w-full h-full object-cover rounded-md md:rounded-r-md" alt="Group" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className='text-4xl'>Faculty Coordinator</h1>
        </div>
        <div className='bg-white mx-4 md:mx-20 rounded-lg my-6'>
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-80 w-full object-cover md:w-80 aspect-w-16 aspect-h-9 cursor-pointer rounded-lg md:rounded-l-lg"
                src={facultyPhoto}
                alt="Card Image"
              />
            </div>
            <div className="p-4 md:p-8">
              <p
                className="block mt-1 text-sm md:text-2xl leading-tight font-medium text-black"
              >
                Dr. Umayal C
              </p>
              <p className="mt-2 text-gray-500 text-xs md:text-xl">Dr. Umayal C, apart from being a professor from the School of Electrical Engineering, Vellore Institute of Technology, Chennai, is very interested in the field of the environment too. It is with this interest that ma'am has joined the Biosphere Club. Besides working on the environment, ma'am also guides the club and its members as the faculty coordinator.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
