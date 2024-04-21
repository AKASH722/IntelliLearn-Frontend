// ShimmerCard.js
import React from 'react';

// ShimmerCard component for displaying skeleton loading UI
const ShimmerCard = () => {
    // Use Tailwind classes for shimmer effect styling
    return (
        <div className="border border-gray-300 rounded-lg shadow-sm m-4 px-96 py-8 bg-gray-200 animate-pulse">
            <div className="h-8 bg-gray-400 rounded mb-4"></div>
        </div>
    );
};

export default ShimmerCard;
