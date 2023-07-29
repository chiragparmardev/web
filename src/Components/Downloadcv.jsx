import React from "react";
import resume from "../Images/Resume.pdf";

export default function Downloadcv() {
  return (
    <a
      href={resume}
      download={resume}
      style={{ color: "white", textDecoration: "none" }}
    >
      <button className="btn_download_cv">Download CV</button>
    </a>
  );
}
