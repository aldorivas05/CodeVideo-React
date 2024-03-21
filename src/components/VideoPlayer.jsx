import React from "react";

const VideoPlayer = ({id}) => {
    return (
        <div className="video-overlay">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
};


export default VideoPlayer