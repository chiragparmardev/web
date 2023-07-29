import React from "react";
import img1 from "../Images/img2.png";
// import img1 from "../Images/img1.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Downloadcv from "./Downloadcv";

export default function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      style={{ marginTop: "90px", backgroundColor: "transparent" }}
      id="home-page"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-7"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "justify",
            }}
          >
            <h1
              style={{ fontSize: "3rem", marginBottom: "2%", color: "white" }}
            >
              Hy! I am
            </h1>
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "2%",
                color: "#c147e9",
              }}
            >
              Chirag Parmar
            </h1>
            <p style={{ color: "gray " }}>
              Welcome to my portfolio! I'm a skilled web and app developer with
              a passion for creating impactful digital experiences. I specialize
              in clean and efficient code, crafting responsive websites and
              robust applications. Let's collaborate and bring your ideas to
              life across web and mobile platforms!
            </p>
            <Downloadcv />
          </div>
          <div className="col-md-5" style={{}}>
            <img
              src={img1}
              alt="Profile"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
