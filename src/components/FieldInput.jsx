import React from "react";
import "./style/FieldInput.css";
import formatLabel from "../utils/formatLabel";

const FieldInput = ({ label, type, value, options, onChange }) => {
  switch (type) {
    case "number":
      return (
        <div className="field-input">
          <label>{formatLabel(label)}</label>
          <input
            type="number"
            value={value || 0}
            onChange={(e) => onChange(Number(e.target.value))}
            min={0}
          />
        </div>
      );
    case "boolean":
      return (
        <div className="field-input checkbox-input">
          <label>{formatLabel(label)}</label>
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="field-input">
          <label>{formatLabel(label)}</label>
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

export default FieldInput;
