import React from "react";
function Card({ language }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{language.title}</h3>
          <p className="card-text">{language.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
