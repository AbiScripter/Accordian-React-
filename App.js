import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordian({ data }) {
  return (
    <div className="accordion">
      {data.map((accor, i) => {
        return <Item key={i} accor={accor} id={i} />;
      })}
    </div>
  );
}

function Item({ accor, id }) {
  const [selected, setSelected] = useState(false);

  function handleOpening() {
    setSelected((selected) => !selected);
  }

  return (
    <div
      onClick={() => handleOpening()}
      className={`item ${selected ? "open" : ""}`}
    >
      <span className="number">{id + 1}</span>
      <span className="title">{accor.title}</span>

      <span className="icon">{selected ? "-" : "+"}</span>
      {selected ? <p className="content-box">{accor.text}</p> : ""}
    </div>
  );
}

function App() {
  return (
    <>
      <Accordian data={faqs} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
