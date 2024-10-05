import React, { useState } from "react";
import DataInputTree from "./components/DataInputTree";
import isEmptyObject from "./utils/isEmptyObject";
import generateDefaultData from "./utils/generateDefaultData";
import schema from "./data/schema";
import "./App.css";

export default function App() {
  const [data, setData] = useState(generateDefaultData(schema));

  const handleExport = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json";
    link.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        setData(importedData);
      } catch (error) {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <h1>React Data Input Tree</h1>
      <DataInputTree schema={schema} data={data} onDataChange={setData} />
      {!isEmptyObject(data) && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <div className="json-actions">
        <button className="export-btn" onClick={handleExport}>
          Export JSON
        </button>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload JSON
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".json"
          onChange={handleImport}
        />
      </div>
    </div>
  );
}
