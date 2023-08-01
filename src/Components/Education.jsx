import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Vtimeline from "./Vtimeline";

export default function Education() {
  return (
    <div className="container" id="about-us">
      <div>
        <p style={{ color: "gray", marginTop: "20px" }}>
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className="Education_text_main">Education.</h2>
      </div>
      <VerticalTimeline>
        <Vtimeline
          std="10th"
          city="Saurastra"
          year="2017"
          desc="I completed my 10th class at Swastik School, achieving academic excellence and acquiring a solid foundation in various subjects. I demonstrated exceptional dedication and perseverance, which resulted in a strong academic performance and prepared me for future educational endeavors."
        />
        <Vtimeline
          std="12th"
          city="Saurastra"
          year="2019"
          desc="In my 12th class in the commerce stream at Swastik School, I delved into advanced subjects such as Economics, Accountancy, and Business Studies. With a focused approach and consistent effort, I gained comprehensive knowledge and developed crucial analytical and problem-solving skills necessary for pursuing a career in the field of commerce."
        />
        <Vtimeline
          std="B.C.A"
          city="Saurastra University"
          year="2022"
          desc="During my Bachelor of Computer Applications (B.C.A) at C.U. Shah Commerce College, I delved into various aspects of software development, including programming languages, database management, and software engineering principles. With a strong focus on my goal of becoming a software developer, I continued to enhance my skills and knowledge through continuous learning and hands-on projects, preparing myself for a successful career in the field."
        />
        <Vtimeline
          std="M.C.A"
          city="Gujarat"
          year="2023 - present"
          desc="In addition to my focus on becoming a full stack developer, my Master of Computer Applications (MCA) program provided me with a comprehensive understanding of various subjects. I delved into advanced topics such as software engineering, data structures and algorithms, artificial intelligence, mobile app development, and data analytics. This in-depth knowledge across multiple subjects enriches my skill set and equips me to tackle complex challenges in the software development field."
        />
      </VerticalTimeline>
    </div>
  );
}
