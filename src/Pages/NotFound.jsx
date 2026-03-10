
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn-home">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;