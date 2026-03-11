// src/pages/CropDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as CropsData from "../data/CropsData"; 

const CropDetails = () => {
  const { id } = useParams(); // Get crop ID from URL
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    // Fetch crop from mock data
    const foundCrop = CropsData.cropsData.find((c) => c.id === id);
    setCrop(foundCrop || null);
  }, [id]);

  if (!crop) {
    return (
      <div className="crop-details">
        <h2>Crop Not Found</h2>
        <Link to="/crops" className="btn-back">
          Back to Crops
        </Link>
      </div>
    );
  }

  return (
    <div className="crop-details">
      <h1>{crop.cropName}</h1>
      <p><strong>Field:</strong> {crop.field}</p>
      <p><strong>Status:</strong> {crop.status}</p>
      <p><strong>Planting Date:</strong> {crop.plantingDate}</p>
      <p><strong>Harvest Date:</strong> {crop.harvestDate}</p>
      <p><strong>Notes:</strong> {crop.notes || "No notes"}</p>

      <Link to={`/crops/${crop.id}/edit`} className="btn-edit">
        Edit Crop
      </Link>
      <Link to="/crops" className="btn-back">
        Back to Crops
      </Link>
    </div>
  );
};

export default CropDetails;