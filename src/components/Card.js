import React, { useState, useEffect } from "react";
import "../components/Card.css";

const getItemsFromLS = () => {
  const list = JSON.parse(localStorage.getItem("lists"));
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function Card() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getItemsFromLS());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  return (
    <div className="container">
      <h1 className="header">To Do App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={input}
            placeholder="Type here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add</button>
          {items.map((item, idx) => {
            return (
              <div key={idx}>
                <h2 className="heading">{item}</h2>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Card;
