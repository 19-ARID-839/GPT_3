import React from "react";
import possibilityImage from "../../assets/assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Enter Before Evolution Leaves You Behind</h4>
      <h1 className="gradient__text">
        What Awaits Is Beyond Prediction — But Within Reach.
      </h1>
      <p>
        ROX-AI is not a tool. It's an awakening. It listens, adapts, and acts —
        before you know you need it. Early access isn’t just a chance to use it
        — it’s your entry into the next phase of machine-powered evolution.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
