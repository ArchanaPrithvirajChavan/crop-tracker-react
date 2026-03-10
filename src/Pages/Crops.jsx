import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CropList from "../features/crops/CropList";
import { getCrops } from "../utils/cropsStorage"; // use localStorage
import "./Crops.css";

const Crops = () => {
  const [crops, setCrops] = useState([]);

  // Load crops from localStorage and listen for updates
  useEffect(() => {
    setCrops(getCrops());

    const handleUpdate = () => setCrops(getCrops());
    window.addEventListener("cropsUpdated", handleUpdate);

    return () => window.removeEventListener("cropsUpdated", handleUpdate);
  }, []);

  return (
    <div className="crops-page">
      <div className="crops-header">
        <h1>All Crops</h1>
        <Link to="/crops/add" className="btn-add">
          + Add Crop
        </Link>
      </div>

      <CropList crops={crops} />
    </div>
  );
};

export default Crops;