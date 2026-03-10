import React, { useState, useEffect } from "react";
import CropForm from "../features/crops/CropForm";
function AddCropPage() {
  const [crops, setCrops] = useState([]);

  // Load existing crops from localStorage
  useEffect(() => {
    const savedCrops = JSON.parse(localStorage.getItem("crops")) || [];
    setCrops(savedCrops);
  }, []);

  // Handle new crop submission
  const handleAddCrop = (newCrop) => {
    const cropWithId = { ...newCrop, id: Date.now() };
    const updatedCrops = [...crops, cropWithId];
    setCrops(updatedCrops);
    localStorage.setItem("crops", JSON.stringify(updatedCrops));
    alert("Crop added successfully!"); // optional
  };

  return (
    <div>
      <h1>Add Crop</h1>
      <CropForm onSubmit={handleAddCrop} />
    </div>
  );
}

export default AddCropPage;