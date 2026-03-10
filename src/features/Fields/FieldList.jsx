
import React from "react";
import FieldCard from ".Fields/FieldCard";
import "./FieldList.css"; 

const FieldList = ({ fields }) => {
  if (!fields || fields.length === 0) {
    return <p>No fields available.</p>;
  }

  return (
    <div className="field-list">
      {fields.map((field) => (
        <FieldCard key={field.id} field={field} />
      ))}
    </div>
  );
};

export default FieldList;