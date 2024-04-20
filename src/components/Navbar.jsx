import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to handle the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle toggling the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Placeholder function for handling logout
    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logged out");
        // Example: redirect to login page or perform other logout actions
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'><div className="text-white text-xl font-bold" >
                    IntelliLearn
                </div></Link>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/leaderboard" className="text-white hover:text-gray-300">Leaderboard</Link>
                    <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
                    <button
                        className="text-white hover:text-gray-300"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
                {/* Mobile menu toggle button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <Link to="/" className="block text-white hover:text-gray-300 p-2">Home</Link>
                    <Link to="/leaderboard" className="block text-white hover:text-gray-300 p-2">Leaderboard</Link>
                    <Link to="/profile" className="block text-white hover:text-gray-300 p-2">Profile</Link>
                    <button
                        className="block text-white hover:text-gray-300 p-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
