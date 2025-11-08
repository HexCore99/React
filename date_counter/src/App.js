import { useState } from "react";

function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const d = `Today is ${new Date().toDateString()}`;
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [targetDate, setDate] = useState(d);

  function incrementStep() {
    setStep((step) => step + 1);
  }
  function decrementStep() {
    setStep((step) => step - 1);
  }

  function incrementCount() {
    setCount((count) => {
      const nextCount = count + step;
      updateDateLabel(nextCount);
      return nextCount;
    });
  }
  function decrementCount() {
    setCount((count) => {
      const nextCount = count - step;
      updateDateLabel(nextCount);
      return nextCount;
    });
  }

  function updateDateLabel(count) {
    const current = new Date();
    const next = new Date(current);
    next.setDate(next.getDate() + count);
    if (count === 0)
      setDate((targetDate) => `Today is  ${current.toDateString()}`);
    else if (count > 0)
      setDate(
        (targetDate) => `${count} day from today is ${next.toDateString()}`
      );
    else
      setDate(
        (targetDate) =>
          `${Math.abs(count)} days ago from today is ${next.toDateString()}`
      );
  }

  return (
    <div className="date-counter">
      <div className="step">
        <button onClick={decrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incrementStep}>+</button>
      </div>

      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>

      <div className="date-label">
        <p> {targetDate}</p>
      </div>
    </div>
  );
}

export default App;
