import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleNext() {
    setStep((current) => Math.min(current + 1, 3));
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor={"#e7e7e7"}
                textColor={"#333"}
                onClick={() => alert(`Learn How to ${messages[step - 1]}`)}
              >
                Learn
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
