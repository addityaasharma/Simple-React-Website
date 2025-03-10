import React from "react";
import "./SocialMedia.css";

const Facebook = () => {
  return (
    <div className="social-page facebook">
      <h1>👥 Welcome to Facebook</h1>
      <p>Stay connected with friends, family, and communities through posts, videos, and discussions.</p>
      <div className="features">
        <div>📰 Get the Latest News & Updates</div>
        <div>👨‍👩‍👦 Join Groups & Build Communities</div>
        <div>🎥 Watch Engaging Videos & Live Streams</div>
        <div>📢 Share Your Thoughts & Stories</div>
      </div>
      <button className="explore-btn">Join Now</button>
    </div>
  );
};

export default Facebook;
