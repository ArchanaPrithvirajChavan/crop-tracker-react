// Manage crops with localStorage
export const getCrops = () => {
  return JSON.parse(localStorage.getItem("crops")) || [];
};

export const saveCrops = (crops) => {
  localStorage.setItem("crops", JSON.stringify(crops));
  window.dispatchEvent(new Event("cropsUpdated")); // notify Dashboard/AllCrops
};

export const addOrEditCrop = (crop) => {
  const crops = getCrops();
  if (crop.id) {
    // Edit
    const updatedCrops = crops.map((c) => (c.id === crop.id ? crop : c));
    saveCrops(updatedCrops);
  } else {
    // Add
    crop.id = Date.now();
    crops.push(crop);
    saveCrops(crops);
  }
};
export const deleteCrop = (id) => {
  const crops = getCrops();
  const updatedCrops = crops.filter((crop) => crop.id !== id);
  localStorage.setItem("crops", JSON.stringify(updatedCrops));

  window.dispatchEvent(new Event("cropsUpdated"));
};