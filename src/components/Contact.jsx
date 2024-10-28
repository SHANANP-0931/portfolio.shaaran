import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
    const contacts = [
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91 7907156801',
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'sharanferoke@gmail.com',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/muhammed-shaaran-s-35684317a/',
            value: 'linkedin.com/in/muhammedshaaran',
        },
        {
            icon: <FaInstagram />,
            label: 'Instagram',
            link: 'https://instagram.com/muhammedshaaran',
            value: '@muhammedshaaran',
        },
    ];

    return (
        <section id="contact" className="container mx-auto p-8">
            <h3 className="text-4xl font-bold mb-8 text-center">Contact Me</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                    >
                        <div className="text-4xl mb-4 text-blue-500">{contact.icon}</div>
                        <h4 className="text-xl font-semibold">{contact.label}</h4>
                        <p className="text-gray-600">{contact.value}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;
