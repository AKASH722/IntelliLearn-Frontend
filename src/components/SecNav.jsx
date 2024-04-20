import React from 'react';
import { Link } from 'react-router-dom';

const SecNav = () => {
    return (
        <nav className="bg-gray-700 p-4">
            <div className="container mx-auto flex space-x-4">
                <Link to="/python" className="text-white hover:text-gray-300">Python</Link>
                <Link to="/java" className="text-white hover:text-gray-300">Java</Link>
                <Link to="/react" className="text-white hover:text-gray-300">React</Link>
            </div>
        </nav>
    );
};

export default SecNav;
