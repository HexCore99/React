import { useState } from "react";

const faqData = [
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

export default function App() {
  const [items, setItems] = useState(
    faqData.map((faq) => ({ ...faq, isFolded: false }))
  );

  function handleToggle(index) {
    setItems((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isFolded: !faq.isFolded } : faq
      )
    );
  }

  return (
    <div className="container">
      {items.map((faq, index) => (
        <Card
          key={faq.title}
          faq={faq}
          index={index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function Card({ faq, index, onToggle }) {
  return (
    <div className="card">
      <p className="card-line">
        <span>
          {index + 1}. {faq.title}
        </span>
        <button
          type="button"
          className="card-plus"
          onClick={() => onToggle(index)}
          aria-expanded={!faq.isFolded}
        >
          {faq.isFolded ? "-" : "+"}
        </button>
      </p>
      {faq.isFolded && <p>{faq.text}</p>}
    </div>
  );
}

function Accordion() {
  return <div className="" />;
}