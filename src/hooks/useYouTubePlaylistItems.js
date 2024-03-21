import React, { useState, useEffect } from "react";

const useYouTubePlaylistItems = (playlistId) => {
  const [playlistItems, setPlaylistItems] = useState([]);

  const apiKey = "AIzaSyB2e_J4ADzGY6GGS0i8SapPeBNKh5pmoR4"; // Reemplaza con tu propia clave de API de YouTube

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setPlaylistItems(data.items);
        } else {
          console.error("No se encontraron elementos en la lista de reproducción.");
        }
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };

    fetchPlaylistItems();
  }, [playlistId, apiKey]);

  return playlistItems;
};

export default useYouTubePlaylistItems;
