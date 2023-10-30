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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((accor, i) => {
        return (
          <Item
            key={accor.title}
            title={accor.title}
            num={i}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {accor.text}
          </Item>
        );
      })}
    </div>
  );
}

function Item({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleOpening() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div onClick={handleOpening} className={`item ${isOpen ? "open" : ""}`}>
      <span className="number">{num + 1}</span>
      <span className="title">{title}</span>

      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen ? <p className="content-box">{children}</p> : ""}
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
