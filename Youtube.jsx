import React from "react";
import "./SocialMedia.css";

const Youtube = () => {
  return (
    <div className="social-page youtube">
      <h1>🎬 Welcome to YouTube</h1>
      <p>Watch, create, and share videos with a massive global audience on the world’s largest video platform.</p>
      <div className="features">
        <div>📺 Enjoy Unlimited Video Content</div>
        <div>🎙️ Follow Your Favorite Creators</div>
        <div>🔴 Go Live and Interact with Fans</div>
        <div>🎞️ Upload & Monetize Your Videos</div>
      </div>
      <button className="explore-btn">Watch Now</button>
    </div>
  );
};

export default Youtube;
