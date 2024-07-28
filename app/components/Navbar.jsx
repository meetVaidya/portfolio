import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center py-4 bg-opacity-80">
            <p className="text-2xl font-bold text-gray-800"></p>
            <div className="flex space-x-4 px-6">
                <a href="https://github.com/meetVaidya" className="text-gray-500">GitHub</a>
                <a href="mailto:vaidyameet2004@gmail.com" className="text-gray-500">Contact Me</a>
                <a href="https://www.linkedin.com/in/meet-vaidya-026594257/" className="text-gray-500">LinkedIn</a>
            </div>
        </nav>
    );
}

export default Navbar;
