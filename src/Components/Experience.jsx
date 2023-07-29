import React from "react";
import img1 from "../Images/img3.jpeg";

export default function Experience() {
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-md-6 d-flex  align-items-center">
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundImage: "linear-gradient(to right, #c147e9, #eaabff )",
              position: "relative",
              borderRadius: "5%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                position: "absolute",
                borderRadius: "5%",
                zIndex: "1",
                transform: "rotate(-5deg)",
              }}
            >
              <img
                src={img1}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Education</h3>
        </div>
      </div>
    </div>
  );
}
