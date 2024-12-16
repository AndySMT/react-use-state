import React from "react";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center mb-3">Lista di Linguaggi</h1>
        <List />
      </div>
    </>
  );
}

export default App;
