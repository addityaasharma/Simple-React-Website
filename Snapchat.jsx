import React from "react";
import "./SocialMedia.css";

const Snapchat = () => {
  return (
    <div className="social-page snapchat">
      <h1>👻 Welcome to Snapchat</h1>
      <p>Send disappearing messages, use fun filters, and stay connected with friends in a unique way.</p>
      <div className="features">
        <div>🎭 Try Out Cool AR Filters</div>
        <div>🔥 Keep Your Snap Streaks</div>
        <div>🎥 Watch Exclusive Spotlight Videos</div>
        <div>📍 Discover Local Stories & Trends</div>
      </div>
      <button className="explore-btn">Start Snapping</button>
    </div>
  );
};

export default Snapchat;
