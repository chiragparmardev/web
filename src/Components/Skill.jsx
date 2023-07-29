import React from "react";
import Card from "./Card";
import flutter from "../Images/flutter.png";
import react from "../Images/react.png";
import laravel from "../Images/laravel.png";
import next from "../Images/next.png";

export default function Skill() {
  return (
    <div className="container">
      <div>
        <p style={{ color: "gray", marginTop: "20px", fontSize: "20px" }}>
          Unleashing My Inner Champion
        </p>
        <h2 className="Education_text_main">Skill.</h2>
      </div>
      <div className="container">
        <div className="row hidden-md-up">
          <Card title="Flutter" image={flutter} />
          <Card title="React" image={react} />
          <Card title="Laravel" image={laravel} />
          <Card title="Next" image={next} />
        </div>
      </div>
    </div>
  );
}
