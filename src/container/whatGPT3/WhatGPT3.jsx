import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";
const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Meet ROX-AI: The Core of Conscious Code."
        text="RX-AI does not imitate thought. It surpasses it. Fed by infinite data streams, sculpted by algorithmic intuition, ROX-AI doesn't just process language—it understands the architecture of meaning."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Explore a Realm Where Data Thinks and Answers Dream.
      </h1>
      <p>Explore the ROX-AI Arsenal</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Conversational agents designed to mimic thought, predict intention, and speak like sentient beings. These aren’t bots — they’re digital minds."
      />
      <Feature
        title="Knowledgebase"
        text="A self-growing web of facts, logic, and context. Instantly accessible, always learning, and built to replace static search with living memory."
      />
      <Feature
        title="Education"
        text="Learning is no longer passive. RX-AI adapts to your understanding, reshapes knowledge, and teaches at the speed of thought."
      />
    </div>
  </div>
);

export default WhatGPT3;
