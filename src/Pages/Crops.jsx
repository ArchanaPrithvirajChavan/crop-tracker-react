// src/pages/Crops.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CropList from "../features/crops/CropList";
import { cropsData } from "../data/CropsData"; // mock data
import "./Crops.css";

const Crops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    // Load crops (replace with API or LocalStorage)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCrops(cropsData);
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