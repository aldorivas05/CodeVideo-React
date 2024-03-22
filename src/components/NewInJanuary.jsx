import React, {useState} from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import useYouTubePlaylist from '../hooks/useYouTubePlaylist';
import VideoPlayer from './VideoPlayer';
import '..//styles/NewInJanuary.scss';


const NewInJanuary = () => {
    const playlistId = 'PLvahqwMqN4M0FavMKTNT8CvMj3jgb35Ei';
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
        <div className="carousel-january">
            <section className="carousel__container-january">
                {playlistItems.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title, thumbnails, resourceId } = snippet;
                    const {videoId} = resourceId;
                    const { medium = {} } = thumbnails;
                    return (
                        <div key={videoId} 
                        className='carousel-item-january'
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

export { NewInJanuary };
