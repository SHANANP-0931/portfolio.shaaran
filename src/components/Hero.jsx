import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/image5.webp'; // Replace with your image path
import backgroundImage from '../assets/images/server1.webp'; // Replace with a suitable background image

function Hero() {
    return (
        <section
            className="relative h-screen w-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            {/* Curved Bottom Effect */}
            <div className="absolute bottom-0 w-full bg-white rounded-tl-[15%] rounded-tr-[15%] h-32"></div>

            {/* Hero Content Wrapper */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-12 space-y-10 lg:space-y-0 relative z-10">
                {/* Text Content Section */}
                <div className="text-left lg:w-1/2 space-y-4">
                    <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                        Hi, I'm Muhammed Shaaran 👋
                    </h2>
                    <TypeAnimation
                        sequence={[
                            'A Project Manager at Habtech Technologies',
                            2000,
                            'A Full-Stack Web Developer',
                            2000,
                            'A Software Engineer with Passion for Code',
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-3xl mt-2 text-blue-200 drop-shadow-md"
                    />
                </div>

                {/* Enhanced Slanted Image Section */}
                <motion.div
                    className="lg:w-1/3 w-2/3 transform rotate-6 hover:rotate-0 transition-transform duration-500"
                    initial={{ opacity: 0, scale: 0.9 }} // Start with a slight scale down
                    animate={{ opacity: 1, scale: 1 }} // Scale to normal size
                    transition={{ duration: 0.8, ease: "easeOut" }} // Shorter duration for snappier animation
                >
                    <img
                        src={profileImage}
                        alt="Muhammed Shaaran"
                        className="object-cover rounded-xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
