import React from "react";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="items">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button className="btn1" onClick={() => deleteHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
