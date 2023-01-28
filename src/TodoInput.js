import React from "react";

export default function TodoInput({ item, handleChange, handleSubmit }) {
  return (
    <div className="container m-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="add todo task"
            value={item}
            onChange={handleChange}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-outline-primary" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
