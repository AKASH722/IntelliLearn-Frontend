import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[39.5rem] bg-gray-800 p-8">
            <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get('v')}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        height: '30rem',
                        borderRadius: '8px',
                        border: '2px solid #4A5568', // Border with a subtle color
                    }}
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPlayer;
