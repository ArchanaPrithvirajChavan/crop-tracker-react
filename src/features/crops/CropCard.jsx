import React from "react";

const CropCard = ({ crop }) => {
  const statusColor = {
    Planted: "orange",
    Growing: "green",
    Harvested: "gray",
  };

  return (
    <div className="crop-card">
      <h3>{crop.cropName}</h3>
      <p><strong>Field:</strong> {crop.field}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: statusColor[crop.status] }}>{crop.status}</span>
      </p>
      <p><strong>Planting Date:</strong> {crop.plantingDate}</p>
      <p><strong>Harvest Date:</strong> {crop.harvestDate}</p>
      <p><strong>Notes:</strong> {crop.notes}</p>
    </div>
  );
};

export default CropCard;