import React from "react";

function Button({ language, onClick }) {
  return (
    <div className="p-1">
      <button
        onClick={() => onClick(language)}
        className="btn btn btn-outline-warning"
      >
        {language.title}
      </button>
    </div>
  );
}

export default Button;
