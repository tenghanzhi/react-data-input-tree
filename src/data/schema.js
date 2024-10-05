const schema = {
  parent: "string",
  components: {
    unit: {
      unitType: ["UNIT", "MISSILE", "STRUCTURE"],
    },
    unitStats: {
      radius: "number",
      invulnerable: "boolean",
      ground: "boolean",
      air: "boolean",
      selectable: "boolean",
      targetPriority: "number",
      selectionPriority: "number",
      ignoreCollisions: "boolean",
    },
    health: {
      maxHealth: "number",
      startHealth: "number",
      regeneration: "number",
      regenerationDelay: "number",
    },
    unitValue: {
      goldCost: "number",
    },
  },
};

export default schema;
