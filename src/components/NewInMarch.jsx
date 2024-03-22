import React, {useState} from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import useYouTubePlaylist from '../hooks/useYouTubePlaylist';
import VideoPlayer from './VideoPlayer';
import '..//styles/NewInMarch.scss';


const NewInMarch = () => {
    const playlistId = 'PLvahqwMqN4M1F-k_iYRWGRDTH_7Ut4-1X';
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
        <div className="carousel-March">
            <section className="carousel__container-March">
                {playlistItems.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title, thumbnails, resourceId } = snippet;
                    const {videoId} = resourceId;
                    const { medium = {} } = thumbnails;
                    return (
                        <div key={videoId} 
                        className='carousel-item-March'
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

export { NewInMarch };
