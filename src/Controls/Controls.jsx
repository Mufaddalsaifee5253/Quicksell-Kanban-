import React from "react";
import "./Controls.css";

const Controls = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="controls">
      <div>
        <label>Grouping:</label>
        <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
          <option value="user">User</option>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Ordering:</label>
        <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
