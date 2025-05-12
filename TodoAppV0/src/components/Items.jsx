import React from "react";

const Items = ({
  title,
  dueDate,
  completeVal,
  deleteHandler,
  completeHandler,
}) => {
  return (
    <div>
      <span
        style={{
          textDecoration: completeVal ? "line-through" : "none",
        }}
      >
        <li>{title}</li>
        <li>{dueDate}</li>
      </span>

      <button onClick={() => deleteHandler(title)}>Delete</button>
      {completeVal ? (
        <button onClick={() => completeHandler(title)}>Remove Complete</button>
      ) : (
        <button onClick={() => completeHandler(title)}> Complete</button>
      )}
    </div>
  );
};

export default Items;
