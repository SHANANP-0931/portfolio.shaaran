import React from 'react';

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative "
        >
            {/* Overlay for better text visibility */}

            {/* Concave shape at the top of the Experience section */}
            <svg
                className="absolute top-0 left-0 w-full h-20"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 C720,60 720,120 1440,0 L1440,120 L0,120 Z"
                    className="fill-current text-white"
                />
            </svg>

            {/* Content Wrapper */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative p-12 space-y-8 lg:space-y-0">
                {/* Left Section: Experience Content */}
                <div className="w-full lg:w-1/2 text-black">
                    <h3 className="text-4xl font-bold mb-4">Experience</h3>
                    <div className="mb-6">
                        <h4 className="text-2xl font-semibold">Junior Developer</h4>
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold">Habtech Technologies</span> | 2021 - 2023
                        </p>
                        <p className="text-lg leading-relaxed mt-2">
                            Started my career as a Junior Developer at Habtech Technologies, where I focused on full-stack web development. My responsibilities included collaborating with the development team to design and implement innovative web applications, enhancing user experience, and ensuring high-quality code through best practices.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">Promoted to Project Manager</h4>
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold">Habtech Technologies</span> | 2023 - Present
                        </p>
                        <p className="text-lg leading-relaxed mt-2">
                            In 2023, I was promoted to Project Manager, where I transitioned from a Senior Developer role. In this capacity, I lead project teams, manage timelines and deliverables, and ensure effective communication between stakeholders. My goal is to foster a collaborative environment that drives project success while maintaining high-quality standards.
                        </p>
                    </div>
                </div>

                {/* Right Section: Optional Image or Graphic */}
                <div className="h-auto lg:w-1/2 flex justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/009/636/769/original/experience-3d-icon-png.png" // Replace with your desired image
                        alt="Experience"
                        className="w-60 h-60 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
