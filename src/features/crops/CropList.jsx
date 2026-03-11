import React from "react";
import { Link } from "react-router-dom";
import CropCard from "./CropCard";
import { deleteCrop } from "../../utils/cropsStorage";

const CropList = ({ crops }) => {

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crop?");
    
    if (confirmDelete) {
      deleteCrop(id);
    }
  };

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

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(crop.id)}
              style={{
                position: "absolute",
                top: "40px",
                right: "10px",
                padding: "4px 8px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              Delete
            </button>

          </div>
        ))
      )}
    </div>
  );
};

export default CropList;