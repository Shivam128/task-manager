import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            marginRight: "0.5rem",
            fontWeight: filter === f ? "bold" : "normal",
          }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default React.memo(Filter);
