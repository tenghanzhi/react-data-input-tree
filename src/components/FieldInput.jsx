import React from "react";
import "./style/FieldInput.css";
import formatLabel from "../utils/formatLabel";

const FieldInput = ({
  label,
  type,
  value,
  options,
  onChange,
  inputProps,
  style,
}) => {
  switch (type) {
    case "number":
      return (
        <div className="field-input" style={style}>
          <label>{formatLabel(label)}</label>
          <input
            type="number"
            value={value || 0}
            onChange={(e) => onChange(Number(e.target.value))}
            min={0}
            {...inputProps}
          />
        </div>
      );
    case "boolean":
      return (
        <div className="field-input checkbox-input" style={style}>
          <label>{formatLabel(label)}</label>
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            {...inputProps}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="field-input" style={style}>
          <label>{formatLabel(label)}</label>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...inputProps}
          >
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
