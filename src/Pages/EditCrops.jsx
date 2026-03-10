
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CropForm from "../features/crops/CropForm";
import { cropsData } from "../data/CropsData";

const EditCrop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const foundCrop = cropsData.find((c) => c.id === Number(id));
    setCrop(foundCrop);
  }, [id]);

  const handleUpdate = (updatedCrop) => {
    const index = cropsData.findIndex((c) => c.id === Number(id));

    if (index !== -1) {
      cropsData[index] = { ...cropsData[index], ...updatedCrop };
      alert("Crop Updated Successfully!");

      navigate(`/crops/${id}`);
    }
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