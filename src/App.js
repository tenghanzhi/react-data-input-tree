import React, { useState } from "react";
import DataInputTree from "./components/DataInputTree";
import isEmptyObject from "./utils/isEmptyObject";
import generateDefaultData from "./utils/generateDefaultData";
import schema from "./data/schema";
import "./App.css";

export default function App() {
  const [data, setData] = useState(generateDefaultData(schema));

  return (
    <div className="App">
      <h1>React Data Input Tree</h1>
      <DataInputTree schema={schema} data={data} onDataChange={setData} />
      {!isEmptyObject(data) && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
