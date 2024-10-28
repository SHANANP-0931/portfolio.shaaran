import React from 'react';
import profileImage from '../assets/images/image1.png'; // Replace with your new image path

function About() {
    return (
        <section className='mt-0'

        >
            <path
                d="M0,0 C720,80 720,120 1440,0 L1440,120 L0,120 Z" // Adjusted path for a smoother curve
                className="fill-current text-black" // Change to your desired background color
            />


            {/* Content Wrapper */}
            <div style={{ marginTop: "-100px" }} className="container mx-auto  flex flex-col lg:flex-row items-center justify-center relative p-12 space-y-8 lg:space-y-0">
                {/* Image Section */}
                <div className="h-auto lg:w-1/2 flex justify-center">
                    <img
                        src={profileImage}
                        alt="Muhammed Shaaran"
                        className="w-60 h-60 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-black">
                    <h3 className="text-4xl font-bold mb-4">About Me</h3>
                    <p className="text-lg leading-relaxed">
                        I am <span className="font-semibold">Muhammed Shaaran</span>, a B.Tech Software Engineer currently working as a
                        Project Manager, <span className='text-black'>
                            at <span className="font-semibold">Habtech Technologies</span>. With 2 years of full-stack web
                            development experience, I specialize in both frontend and backend technologies.
                            Project Manager</span>
                    </p>
                    <p className="text-lg text-black leading-relaxed mt-4">
                        I’m passionate about coding, managing projects efficiently, and ensuring quality delivery. My goal is to
                        continuously grow as a developer and leader in the tech industry.
                    </p>
                </div>
            </div>
        </section >
    );
}

export default About;
