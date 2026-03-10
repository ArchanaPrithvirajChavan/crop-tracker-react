import React from "react";
import { useNavigate } from "react-router-dom";
import CropForm from "../features/crops/CropForm";

const AddCrop = () => {
  const navigate = useNavigate();

  const handleAddCrop = (newCrop) => {
    // For now we just log the crop
    console.log("New Crop Added:", newCrop);

    // Later you can save to LocalStorage or Airtable here

    alert("Crop added successfully!");

    // Redirect to crops page
    navigate("/crops");
  };

  return (
    <div>
      <h1>Add New Crop</h1>

      <CropForm onSubmit={handleAddCrop} />
    </div>
  );
};

export default AddCrop;