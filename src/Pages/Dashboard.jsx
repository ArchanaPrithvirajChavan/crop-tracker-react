import React, { useEffect, useState } from "react";
import CropCard from "../features/crops/CropCard";
import { getCrops } from "../utils/cropsStorage";


function Dashboard() {
  const [crops, setCrops] = useState([]);
  const [stats, setStats] = useState({ total: 0, planted: 0, growing: 0, harvested: 0 });

  useEffect(() => {
    setCrops(getCrops());
    const handleUpdate = () => setCrops(getCrops());
    window.addEventListener("cropsUpdated", handleUpdate);
    return () => window.removeEventListener("cropsUpdated", handleUpdate);
  }, []);

  useEffect(() => {
    const total = crops.length;
    const planted = crops.filter((c) => c.status === "Planted").length;
    const growing = crops.filter((c) => c.status === "Growing").length;
    const harvested = crops.filter((c) => c.status === "Harvested").length;
    setStats({ total, planted, growing, harvested });
  }, [crops]);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats-container">
        {Object.entries(stats).map(([key, value]) => (
          <div className="stat-card" key={key}>
            <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className="recent-crops">
        <h2>Recent Crops</h2>
        {crops.length === 0 ? <p>No crops found.</p> :
          <div className="crop-list">{crops.map((crop) => <CropCard key={crop.id} crop={crop} />)}</div>}
      </div>
    </div>
  );
}

export default Dashboard;