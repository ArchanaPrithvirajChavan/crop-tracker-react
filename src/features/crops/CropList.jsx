// src/features/crops/CropList.jsx

import React from "react";
import CropCard from "./CropCard";
import "./CropList.css";

const CropList = ({ crops }) => {
  if (!crops || crops.length === 0) {
    return <p>No crops available.</p>;
  }

  return (
    <div className="crop-grid">
      {crops.map((crop) => (
        <CropCard key={crop.id} crop={crop} />
      ))}
    </div>
  );
};

export default CropList;