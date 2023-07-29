import React from "react";
import "./Style/Card.css";

export default function Card({ image, title }) {
  return (
    <div className="col-md-3" style={{ marginBottom: "20px" }}>
      <div className="card" style={{ backgroundColor: "#22222260" }}>
        <div
          className="card-body row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-4">
            <div className="img">
              <img src={image} alt="img" style={{ height: "60px" }} />
            </div>
          </div>
          <div className="col-8">
            <h5 className="card-title" style={{ color: "white" }}>
              {title}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
