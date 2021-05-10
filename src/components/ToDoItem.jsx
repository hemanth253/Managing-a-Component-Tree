import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          return props.remove(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
