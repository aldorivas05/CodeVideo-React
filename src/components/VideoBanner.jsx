import React, { useState } from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import VideoPlayer from './VideoPlayer';

const VideoBanner = ({ videoId }) => {
  const playlistId = 'PLJMnVHkwhvSsHe183Rv7pfwZ4QUDdQ1PM';
  const playlistItems = useYouTubePlaylistItems(playlistId);
  const [showBanner, setShowBanner] = useState(false);

  const handleImageClick = () => {
    setShowBanner(true);
  };

  return (
    <div>
      {playlistItems.map((item) => {
        const { id, snippet = {} } = item;
        const { thumbnails } = snippet;
        const { medium = {} } = thumbnails;

        return (
            <img
            width={medium.width}
            height={medium.height}
            src={medium.url}
            alt=""
            onClick={handleImageClick}
          />  
        );
      })}
      <div key={id} className='carousel-item'>
            {showBanner && (
              <VideoPlayer />
            )}
          </div>
    </div>
  );
};

export default VideoBanner;
