import React from "react";
import { Link } from "react-router-dom";
import CropCard from "./CropCard";
import "./CropList.css"; // optional styling

const CropList = ({ crops }) => {
  return (
    <div className="crop-list">
      {crops.length === 0 ? (
        <p>No crops found.</p>
      ) : (
        crops.map((crop) => (
          <div key={crop.id} className="crop-card-wrapper" style={{ position: "relative" }}>
            <CropCard crop={crop} />

            {/* Edit Button */}
            <Link
              to={`/crops/${crop.id}/edit`}
              className="edit-btn"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "4px 8px",
                backgroundColor: "#ff9800",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              Edit
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default CropList;