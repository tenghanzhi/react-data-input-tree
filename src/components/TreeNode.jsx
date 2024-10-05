import React, { useState, useMemo } from "react";
import FieldInput from "./FieldInput";
import "./style/TreeNode.css";

const TreeNode = ({ label, fields, data, onChange, expandable = true }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const renderSubNodes = useMemo(() => {
    return Object.keys(fields).map((key) => {
      const fieldType = fields[key];
      return (
        <li className="tree-node-item" key={key}>
          {Array.isArray(fieldType) ? (
            <FieldInput
              label={key}
              type="dropdown"
              value={data[key]}
              options={fieldType}
              onChange={(val) => onChange(key, val)}
            />
          ) : typeof fieldType === "object" ? (
            <TreeNode
              label={key}
              fields={fieldType}
              data={data[key] || {}}
              onChange={(subKey, val) =>
                onChange(key, { ...data[key], [subKey]: val })
              }
            />
          ) : (
            <FieldInput
              label={key}
              type={fieldType}
              value={data[key]}
              onChange={(val) => onChange(key, val)}
            />
          )}
        </li>
      );
    });
  }, [fields, data, onChange]);

  return (
    <div className="tree-node">
      <div className="tree-node-summary" onClick={handleToggle}>
        {expandable && (
          <span className="toggle-icon">{collapsed ? "▶" : "▼"}</span>
        )}
        <span>{label}</span>
      </div>
      {!collapsed && <ul className="tree-node-list">{renderSubNodes}</ul>}
    </div>
  );
};

export default TreeNode;
