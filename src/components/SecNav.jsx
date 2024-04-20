import { Link } from 'react-router-dom';
import { useState } from 'react';

const SecNav = () => {
    // State to hold the titles
    const titles = [
        {
            name: 'Python',
            path: 'python'
        },
        {
            name: 'Java',
            path: 'java'
        },
        {
            name: 'React',
            path: 'react'
        }
    ];

    return (
        <nav className="bg-gray-700 p-4">
            <div className="container mx-auto flex justify-center">
                {/* Map through the titles and create links */}
                <div className="flex space-x-20">
                    {titles.map((title, index) => (
                        <Link
                            key={index}
                            to={`/${title.path}`}
                            className="text-white p-2 px-4 hover:text-gray-300 border-2 rounded-2xl border-white hover:bg-gray-800"
                        >
                            {title.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SecNav;
