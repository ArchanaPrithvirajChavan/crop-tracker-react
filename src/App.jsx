import { Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Crops from "./Pages/Crops";
import AddCrop from "./Pages/AddCrops";
import EditCrop from "./Pages/EditCrops";
import CropDetails from "./Pages/CropsDetails";
import NotFound from "./Pages/NotFound";

import Layout from "./shared/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        {/* Home */}
        <Route index element={<Dashboard />} />

        {/* Crops */}
        <Route path="crops" element={<Crops />} />
        <Route path="crops/add" element={<AddCrop />} />
        <Route path="crops/:id" element={<CropDetails />} />
        <Route path="crops/:id/edit" element={<EditCrop />} />

        
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;