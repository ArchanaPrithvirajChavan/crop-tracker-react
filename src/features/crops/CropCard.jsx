import React from "react";
import { Link } from "react-router-dom";

const CropCard = ({ crop }) => {
  return (
    <div className="crop-card">
      <h3>{crop.cropName}</h3>

      <p><strong>Field:</strong> {crop.field}</p>
      <p><strong>Status:</strong> {crop.status}</p>

      <div className="crop-actions">
        <Link to={`/crops/${crop.id}`} className="btn-view">
          View
        </Link>

        <Link to={`/crops/${crop.id}/edit`} className="btn-edit">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default CropCard;