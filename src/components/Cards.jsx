import React from 'react';
import img from '../react.png';

const videoData = [
  {
    id: 1,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 2,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 3,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 4,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },
  
  {
    id: 5,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 6,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 7,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },

  {
    id: 8,
    title: 'React JS Tutorial',
    thumbnail: {img},
    channel: 'React JS',
    views: '1.2M views',
    time: '2 days ago'
  },
];

const VideoCard = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {videoData.map(video => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden w-[400px] h-auto">
          <img
            src={img}
            className="w-full h-48 rounded-lg"
          />
          <div className="p-4 text-left">
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{video.channel}</p>
            <div className="text-sm text-gray-500">
              <span>{video.views} • </span>
              <span>{video.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
