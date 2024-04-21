import {Link} from 'react-router-dom';

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
                            className="bg-transparent hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-blue-500 rounded">
                            {title.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SecNav;
