import React, { useState, useEffect } from "react";
import "./CropForm.css";

function CropForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    cropName: "",
    field: "",
    plantingDate: "",
    harvestDate: "",
    status: "Planted",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        cropName: initialData.cropName || "",
        field: initialData.field || "",
        plantingDate: initialData.plantingDate || "",
        harvestDate: initialData.harvestDate || "",
        status: initialData.status || "Planted",
        notes: initialData.notes || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.cropName.trim()) newErrors.cropName = "Crop Name is required";
    if (!formData.field.trim()) newErrors.field = "Field is required";
    if (!formData.plantingDate) newErrors.plantingDate = "Planting Date is required";
    if (!formData.harvestDate) newErrors.harvestDate = "Harvest Date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
    setFormData({
      cropName: "",
      field: "",
      plantingDate: "",
      harvestDate: "",
      status: "Planted",
      notes: "",
    }); // optional: reset form
  };

  return (
    <form className="crop-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Crop Name</label>
        <input type="text" name="cropName" value={formData.cropName} onChange={handleChange} />
        {errors.cropName && <span className="error">{errors.cropName}</span>}
      </div>

      <div className="form-group">
        <label>Field</label>
        <input type="text" name="field" value={formData.field} onChange={handleChange} />
        {errors.field && <span className="error">{errors.field}</span>}
      </div>

      <div className="form-group">
        <label>Planting Date</label>
        <input type="date" name="plantingDate" value={formData.plantingDate} onChange={handleChange} />
        {errors.plantingDate && <span className="error">{errors.plantingDate}</span>}
      </div>

      <div className="form-group">
        <label>Expected Harvest Date</label>
        <input type="date" name="harvestDate" value={formData.harvestDate} onChange={handleChange} />
        {errors.harvestDate && <span className="error">{errors.harvestDate}</span>}
      </div>

      <div className="form-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Planted">Planted</option>
          <option value="Growing">Growing</option>
          <option value="Harvested">Harvested</option>
        </select>
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} />
      </div>

      <button type="submit" className="btn-submit">
        {initialData?.id ? "Update Crop" : "Save Crop"}
      </button>
    </form>
  );
}

export default CropForm;