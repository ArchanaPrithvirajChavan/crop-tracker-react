import { cropsData } from "./data/CropsData";

// Get crops
export const getCrops = () => {
  const storedCrops = localStorage.getItem("crops");

  if (!storedCrops) {
    localStorage.setItem("crops", JSON.stringify(cropsData));
    return cropsData;
  }

  return JSON.parse(storedCrops);
};

// Save crops
export const saveCrops = (crops) => {
  localStorage.setItem("crops", JSON.stringify(crops));
  window.dispatchEvent(new Event("cropsUpdated"));
};

// Add or Edit crop
export const addOrEditCrop = (crop) => {
  const crops = getCrops();

  if (crop.id) {
    const updatedCrops = crops.map((c) => (c.id === crop.id ? crop : c));
    saveCrops(updatedCrops);
  } else {
    crop.id = Date.now();
    crops.push(crop);
    saveCrops(crops);
  }
};

// Delete crop
export const deleteCrop = (id) => {
  const crops = getCrops();
  const updatedCrops = crops.filter((crop) => crop.id !== id);
  saveCrops(updatedCrops);
};