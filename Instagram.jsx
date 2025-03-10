import React from "react";
import "./SocialMedia.css";

const Instagram = () => {
  return (
    <div className="social-page instagram">
      <h1>📸 Welcome to Instagram</h1>
      <p>Instagram is the go-to platform for sharing your moments, stories, and reels with a global audience.</p>
      <div className="features">
        <div>🌟 Share Your Stories & Highlights</div>
        <div>🎥 Watch & Create Viral Reels</div>
        <div>📩 Chat with Friends via DMs</div>
        <div>🔎 Explore Trending Content</div>
      </div>
      <button className="explore-btn">Explore Now</button>
    </div>
  );
};

export default Instagram;
