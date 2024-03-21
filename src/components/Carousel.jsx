import React, {useState} from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import useYouTubePlaylist from '../hooks/useYouTubePlaylist';
import VideoPlayer from './VideoPlayer';
import '..//styles/Carousel.scss';


const Carousel = () => {
    const playlistId = 'PLJMnVHkwhvSsHe183Rv7pfwZ4QUDdQ1PM';
    const playlistItems = useYouTubePlaylistItems(playlistId);
    const playlistData = useYouTubePlaylist(playlistId);

    const [selectedVideoId, setSelectedVideoId] = useState(null);
    const [showVideoBanner, setShowVideoBanner] = useState(false);

    const handleImageClick = (videoId) => {
        setSelectedVideoId(videoId);
        setShowVideoBanner(!showVideoBanner);
    };

    if (!playlistData) {
        // Manejo de carga
        return <p>Cargando...</p>;
    }
    
    return (
        <div className="carousel">
            <section className="carousel__container">
                {playlistItems.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title, thumbnails, resourceId } = snippet;
                    const {videoId} = resourceId;
                    const { medium = {} } = thumbnails;
                    return (
                        <div key={videoId} 
                        className='carousel-item'
                        onClick={() => handleImageClick(videoId)}
                        >
                            <img 
                            width={medium.width} 
                            height={medium.height} 
                            src={medium.url} alt="" 
                            />
                            <h3>{title}</h3>
                        </div>
                    );
                })}
            </section>
                {showVideoBanner && (
                    <VideoPlayer selectedVideoId={selectedVideoId} showVideoBanner={showVideoBanner} setShowVideoBanner={setShowVideoBanner}/>
                )}
        </div>
    );
};

export { Carousel };
