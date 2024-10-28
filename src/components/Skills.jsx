import React from 'react';
import { FaJava, FaPython, FaPhp, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaDatabase, FaCodeBranch } from 'react-icons/fa';

const skillsData = [
    {
        id: 1,
        icon: <FaJava />,
        title: 'Java',
        description: 'A high-level, class-based, object-oriented programming language.',
    },
    {
        id: 2,
        icon: <FaPython />,
        title: 'Python',
        description: 'An interpreted, high-level, general-purpose programming language.',
    },
    {
        id: 3,
        icon: <FaPhp />,
        title: 'PHP',
        description: 'A popular general-purpose scripting language that is especially suited to web development.',
    },
    {
        id: 4,
        icon: <FaNodeJs />,
        title: 'Node.js',
        description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    },
    {
        id: 5,
        icon: <FaJs />,
        title: 'JavaScript',
        description: 'A high-level, dynamic, untyped, and interpreted programming language.',
    },
    {
        id: 6,
        icon: <FaHtml5 />,
        title: 'HTML',
        description: 'The standard markup language for documents designed to be displayed in a web browser.',
    },
    {
        id: 7,
        icon: <FaCss3Alt />,
        title: 'CSS',
        description: 'A style sheet language used for describing the presentation of a document written in HTML.',
    },
    {
        id: 8,
        icon: <FaReact />,
        title: 'React',
        description: 'A JavaScript library for building user interfaces.',
    },
    {
        id: 9,
        icon: <FaVuejs />,
        title: 'Vue.js',
        description: 'An open-source Model-View-ViewModel front end JavaScript framework.',
    },
    {
        id: 10,
        icon: <FaDatabase />,
        title: 'SQL',
        description: 'A domain-specific language used in programming and managing relational databases.',
    },
    {
        id: 11,
        icon: <FaDatabase />,
        title: 'MongoDB',
        description: 'A source-available cross-platform document-oriented database program.',
    },
    {
        id: 12,
        icon: <FaCodeBranch />,  // Use a different icon for RESTful APIs
        title: 'RESTful APIs',
        description: 'Representational State Transfer (REST) is an architectural style for distributed systems.',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="relative p-8 mt-6 rounded-t-xl">
            {/* Background Cut */}
            <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,0 C720,60 720,120 1440,0 L1440,120 L0,120 Z" className="fill-current text-black" />
            </svg>

            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">My Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-pastel-green rounded-lg p-4 shadow-md border border-blue-200 transition-transform hover:scale-105"
                        >
                            <div className="text-3xl mb-4 text-blue-600">{skill.icon}</div>
                            <h3 className="text-lg font-semibold text-center mb-2">{skill.title}</h3>
                            <p className="text-center text-gray-700">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
