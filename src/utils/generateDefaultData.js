const generateDefaultData = (schema) => {
  const defaultData = {};

  const handleSchema = (fields) => {
    let result = {};
    Object.keys(fields).forEach((key) => {
      if (Array.isArray(fields[key])) {
        result[key] = fields[key][0];
      } else if (typeof fields[key] === "object") {
        result[key] = handleSchema(fields[key]);
      } else if (fields[key] === "string") {
        result[key] = "";
      } else if (fields[key] === "number") {
        result[key] = 0;
      } else if (fields[key] === "boolean") {
        result[key] = false;
      }
    });
    return result;
  };

  Object.keys(schema).forEach((key) => {
    defaultData[key] = handleSchema(schema[key]);
  });

  return defaultData;
};

export default generateDefaultData;
