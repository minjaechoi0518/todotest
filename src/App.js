import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");

  const contentChangeHandler = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
  };

  const buttonForAdd = () => {
    if (title.length > 0) {
      const newContent = {
        id: content.length + 1,
        title: title,
      };
      setContent([...content, newContent]);
      setTitle("");
    }
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <input
          name="title"
          onChange={contentChangeHandler}
          className="titleBox"
          value={title}
        ></input>

        <button onClick={buttonForAdd} className="buttonForAdd btnFirst">
          추가하기
        </button>
      </div>
      <div>
        <div className="head clearfix">
          <h1>Todo List</h1>
        </div>
      </div>
      <div className="con_list">
        {content.map((item) => {
          return (
            <div className="con_todo" key={item.id}>
              <div className="title">{item.title}</div>
              {/* <p>{item.todo}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
