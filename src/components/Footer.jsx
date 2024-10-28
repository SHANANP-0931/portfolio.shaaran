import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center space-y-4">
                <p>&copy; {new Date().getFullYear()} Muhammed Shaaran. All Rights Reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-blue-500" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-blue-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
