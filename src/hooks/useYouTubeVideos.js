import React, { useState, useEffect } from 'react';

const useYouTubevideos = ({playlistId}) => {
    const apiKey = "AIzaSyB2e_J4ADzGY6GGS0i8SapPeBNKh5pmoR4"; // Reemplaza con tu propia clave de API de YouTube

 
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [playlistId]);
  return videos
}

export default useYouTubevideos;  