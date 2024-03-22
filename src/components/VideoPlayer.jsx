import React from "react";
import PropTypes from "prop-types";
import Xicon from "../assets/icons/xIcon";
import '../styles/VideoPlayer.scss'
// import ReactPlayer from "react-player";

const VideoPlayer = ({selectedVideoId, showVideoBanner, setShowVideoBanner}) => {
    
    const handleXIconClick = () => {
        setShowVideoBanner(!showVideoBanner)
    };

    return (
        <div className="video-overlay">
            <div className="x-icon" onClick={handleXIconClick}>
                <Xicon />
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=0`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    )
};

VideoPlayer.propTypes = {
    showVideoBanner: PropTypes.bool.isRequired,
    setShowVideoBanner: PropTypes.func.isRequired
};


export default VideoPlayer