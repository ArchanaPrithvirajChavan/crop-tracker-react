import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CropForm from "../features/crops/CropForm";
import { getCrops, addOrEditCrop } from "../utils/cropsStorage";

const EditCrop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const crops = getCrops(); // read from localStorage
    const foundCrop = crops.find((c) => c.id === Number(id));
    setCrop(foundCrop);
  }, [id]);

  const handleUpdate = (updatedCrop) => {
    updatedCrop.id = Number(id); 
    addOrEditCrop(updatedCrop);  // updates localStorage and triggers event
    alert("Crop Updated Successfully!");
    navigate("/crops"); 
  };

  if (!crop) {
    return <p>Crop not found...</p>;
  }

  return (
    <div>
      <h1>Edit Crop</h1>
      <CropForm initialData={crop} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditCrop;