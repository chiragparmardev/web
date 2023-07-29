import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Vtimeline(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#22222260",
        color: "white",
        fontSize: "15px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #22222260" }}
      date={props.year}
      iconStyle={{ background: "black", color: "#c147e9" }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">{props.std}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.city}</h4>
      <p>{props.desc}</p>
    </VerticalTimelineElement>
  );
}
