import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCrops, deleteCrop } from "../utils/cropsStorage";

const DeleteCrop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const crops = getCrops(); // read from localStorage
    const foundCrop = crops.find((c) => c.id === Number(id));
    setCrop(foundCrop);
  }, [id]);

  const handleDelete = () => {
    deleteCrop(Number(id)); // remove crop from localStorage
    alert("Crop Deleted Successfully!");
    navigate("/crops");
  };

  if (!crop) {
    return <p>Crop not found...</p>;
  }

  return (
    <div>
      <h1>Delete Crop</h1>
      <p>Are you sure you want to delete <strong>{crop.name}</strong>?</p>

      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/crops")}>Cancel</button>
    </div>
  );
};

export default DeleteCrop;