import React from "react";

function Button({ language, onClick, isActive }) {
  const active = isActive ? "btn btn-warning" : "btn btn-outline-warning";
  return (
    <div className="p-1">
      <button onClick={() => onClick(language)} className={active}>
        {language.title}
      </button>
    </div>
  );
}

export default Button;
