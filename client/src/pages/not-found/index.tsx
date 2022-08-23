import React from "react";
import "./style.scss";
function NotFound() {
  return (
    <div className="not-found-page">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        Page not found
      </div>
    </div>
  );
}

export default NotFound;