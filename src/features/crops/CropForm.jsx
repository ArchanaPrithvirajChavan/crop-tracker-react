// src/features/crops/CropForm.jsx

import React, { useState, useEffect } from "react";

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

  // Load data when editing
  useEffect(() => {
    if (initialData) {
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.cropName.trim())
      newErrors.cropName = "Crop Name is required";

    if (!formData.field.trim())
      newErrors.field = "Field is required";

    if (!formData.plantingDate)
      newErrors.plantingDate = "Planting Date is required";

    if (!formData.harvestDate)
      newErrors.harvestDate = "Harvest Date is required";

    return newErrors;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form className="crop-form" onSubmit={handleSubmit}>

      {/* Crop Name */}
      <div className="form-group">
        <label htmlFor="cropName">Crop Name</label>
        <input
          type="text"
          id="cropName"
          name="cropName"
          value={formData.cropName}
          onChange={handleChange}
        />
        {errors.cropName && <span className="error">{errors.cropName}</span>}
      </div>

      {/* Field */}
      <div className="form-group">
        <label htmlFor="field">Field</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
        />
        {errors.field && <span className="error">{errors.field}</span>}
      </div>

      {/* Planting Date */}
      <div className="form-group">
        <label htmlFor="plantingDate">Planting Date</label>
        <input
          type="date"
          id="plantingDate"
          name="plantingDate"
          value={formData.plantingDate}
          onChange={handleChange}
        />
        {errors.plantingDate && (
          <span className="error">{errors.plantingDate}</span>
        )}
      </div>

      {/* Harvest Date */}
      <div className="form-group">
        <label htmlFor="harvestDate">Expected Harvest Date</label>
        <input
          type="date"
          id="harvestDate"
          name="harvestDate"
          value={formData.harvestDate}
          onChange={handleChange}
        />
        {errors.harvestDate && (
          <span className="error">{errors.harvestDate}</span>
        )}
      </div>

      {/* Status */}
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Planted">Planted</option>
          <option value="Growing">Growing</option>
          <option value="Harvested">Harvested</option>
        </select>
      </div>

      {/* Notes */}
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-submit">
        {initialData?.id ? "Update Crop" : "Save Crop"}
      </button>

    </form>
  );
}

export default CropForm;