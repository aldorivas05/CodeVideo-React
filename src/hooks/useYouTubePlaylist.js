import React, { useState, useEffect } from "react";

const useYouTubePlaylist = (playlistId) => {
  const [playlistData, setPlaylistData] = useState(null);
  const apiKey = "AIzaSyB2e_J4ADzGY6GGS0i8SapPeBNKh5pmoR4"; // Reemplaza con tu propia clave de API de YouTube

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistId}&key=${apiKey}&list=${playlistId}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setPlaylistData(data.items[0].snippet);
        } else {
          console.error("No se encontraron datos de la lista de reproducción.");
        }
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };

    fetchPlaylistData();
  }, [playlistId, apiKey]);

  return playlistData;
};

export default useYouTubePlaylist;
