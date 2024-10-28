import React from 'react';

function Header() {
    return (
        <header className="sticky top-0 bg-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Muhammed Shaaran</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
                        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
