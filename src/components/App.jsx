// sending return props.remove(props.key); to <ToDoItem key={index} remove={deleteList} text={todoItem} />
// sending parans to deleteList to make changes int parent component
// check key while using mapping

import React, { useState } from "react";

import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteList(key) {
    console.log(key);
    setItems((prevValue) => {
      return prevValue.filter((element, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              remove={deleteList}
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
