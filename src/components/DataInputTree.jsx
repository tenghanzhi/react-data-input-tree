import React from "react";
import TreeNode from "./TreeNode";
import "./style/DataInputTree.css";
import formatLabel from "../utils/formatLabel";

const DataInputTree = ({ schema, data, onDataChange }) => {
  const handleFieldChange = (key, value, isParent = false) => {
    if (isParent) {
      onDataChange((prevData) => ({
        ...prevData,
        parent: value,
      }));
    } else {
      onDataChange((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          ...value,
        },
      }));
    }
  };

  return (
    <div className="data-input-tree">
      {Object.keys(schema).map((key) => {
        if (key === "parent") {
          return (
            <div className="tree-node">
              <div className="field-input">
                <div className="parent-label">
                  Parent
                  <span
                    className="question-mark"
                    title="This field refers to the parent component"
                  >
                    &#63;
                  </span>
                </div>
                <select
                  value={data.parent || "[None]"}
                  onChange={(e) =>
                    handleFieldChange("parent", e.target.value, true)
                  }
                >
                  <option value="[None]">[None]</option>
                </select>
              </div>
            </div>
          );
        } else {
          return (
            <TreeNode
              key={key}
              label={formatLabel(key)}
              fields={schema[key]}
              data={data[key] || {}}
              onChange={(subKey, value) =>
                handleFieldChange(key, {
                  ...data[key],
                  [subKey]: value,
                })
              }
            />
          );
        }
      })}
    </div>
  );
};

export default DataInputTree;
