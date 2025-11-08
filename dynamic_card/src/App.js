import { useState } from "react";

const question = [
  {
    id: 3457,
    questions: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    questions: "What are the building blocks of React?",
    answer: "Components",
  },
  {
    id: 8832,
    questions:
      "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    questions: "How to pass data from parent to child component?",
    answer: "props",
  },
  {
    id: 9103,
    questions: "How to give components memory?",
    answer: "State",
  },
  {
    id: 2002,
    questions:
      "What do we call an input element that is completely synchronized with the state?",
    answer: "Controlled Component",
  },
];
function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="container">
      {question.map((q) => (
        <FlashCards
          question={q}
          isFlipped={selectedId === q.id}
          onSelect={setSelectedId}
          key={q.id}
        />
      ))}
    </div>
  );

  function FlashCards({ question, isFlipped, onSelect }) {
    function handleClick() {
      onSelect(isFlipped ? null : question.id);
    }
    return (
      <div
        className="card"
        onClick={handleClick}
        style={{ backgroundColor: isFlipped ? "red" : "white" }}
      >
        <p>{isFlipped ? question.answer : question.questions}</p>
      </div>
    );
  }
}

export default App;
