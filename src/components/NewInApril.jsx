import React, {useState} from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import useYouTubePlaylist from '../hooks/useYouTubePlaylist';
import VideoPlayer from './VideoPlayer';
import '..//styles/NewInApril.scss';


const NewInApril = () => {
    const playlistId = 'PLvahqwMqN4M33SOO43nYhIFULPCOSygio';
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
        <div className="carousel-april">
            <section className="carousel__container-april">
                {playlistItems.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title, thumbnails, resourceId } = snippet;
                    const {videoId} = resourceId;
                    const { medium = {} } = thumbnails;
                    return (
                        <div key={videoId} 
                        className='carousel-item-april'
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

export { NewInApril };
