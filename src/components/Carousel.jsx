import React from 'react';
import useYouTubePlaylistItems from '../hooks/useYouTubePlaylistItems';
import useYouTubePlaylist from '../hooks/useYouTubePlaylist';

import '..//styles/Carousel.css';

const Carousel = () => {
    const playlistId = 'PLJMnVHkwhvSsHe183Rv7pfwZ4QUDdQ1PM';
    const playlistItems = useYouTubePlaylistItems(playlistId);
    const playlistData = useYouTubePlaylist(playlistId);

    if (!playlistData) {
        // Manejo de carga
        return <p>Cargando...</p>;
    }

    console.log(playlistItems.item);
    console.log(playlistItems);

    return (
        <div className="carousel">
            <section className="carousel__container">
                {playlistItems.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title, thumbnails } = snippet;
                    const { medium = {} } = thumbnails;
                    return (
                        <div key={id} className='carousel-item'>
                            <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                            <h3>{title}</h3>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export { Carousel };
