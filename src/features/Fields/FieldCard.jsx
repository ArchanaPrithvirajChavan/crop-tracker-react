
import React from "react";
import { Link } from "react-router-dom";
import "./FieldCard.css"; // optional CSS for styling

const FieldCard = ({ field }) => {
  return (
    <div className="field-card">
      <h3>{field.fieldName}</h3>
      <p><strong>Location:</strong> {field.location}</p>
      <p><strong>Size:</strong> {field.size} acres</p>
      <p><strong>Status:</strong> {field.status}</p>

      <div className="field-card-buttons">
        <Link to={`/fields/${field.id}`} className="btn btn-details">
          View
        </Link>
        <Link to={`/fields/${field.id}/edit`} className="btn btn-edit">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default FieldCard;