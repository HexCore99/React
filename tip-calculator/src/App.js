import { useState } from "react";

export default App;

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  function handleUpdateBill(val) {
    setBill(Number(val));
  }

  function handleUpdateTip(percentage) {
    setTipPercentage(percentage);
  }

  function handleNumberOfPeople(val) {
    setNumberOfPeople(val);
  }

  function handleResetButton() {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(1);
  }
  const tip = bill * (tipPercentage / 100);

  return (
    <div className="container">
      <TopLabel />
      <BillAmount bill={bill} onHandleUpdateBill={handleUpdateBill} />
      <TipPercentage
        tipPercentage={tipPercentage}
        onUpdateTip={handleUpdateTip}
      />
      <NumberOfPeople
        numberOfPeople={numberOfPeople}
        onhandleNumberOfPeople={handleNumberOfPeople}
      />
      <FinalBill
        tipAmount={tip}
        total={bill + tip}
        numberOfPeople={numberOfPeople}
      />
      <Button onHandleClick={handleResetButton}>Reset</Button>
    </div>
  );
}

function TopLabel() {
  return (
    <div className="top-label">
      <h2>Tip Calculator</h2>
      <p>calculate your tip and split the bill</p>
    </div>
  );
}

function BillAmount({ bill, onHandleUpdateBill }) {
  return (
    <div className="bill-amount">
      <label>$ Bill Amount</label>
      <input
        type="number"
        value={bill === 0 ? "" : bill}
        placeholder="$0.00"
        onChange={(e) => onHandleUpdateBill(e.target.value)}
      />
    </div>
  );
}

function TipPercentage({ tipPercentage, onUpdateTip }) {
  function updateCustomValue(val) {
    onUpdateTip(Number(val));
  }

  return (
    <div className="tip-percentage">
      <label>% Tip Percentage</label>
      <div className="percentage-buttons">
        <button value={10} onClick={(e) => updateCustomValue(e.target.value)}>
          10%
        </button>
        <button value={15} onClick={(e) => updateCustomValue(e.target.value)}>
          15%
        </button>
        <button value={18} onClick={(e) => updateCustomValue(e.target.value)}>
          18%
        </button>
        <button value={20} onClick={(e) => updateCustomValue(e.target.value)}>
          20%
        </button>
        <button value={25} onClick={(e) => updateCustomValue(e.target.value)}>
          25%
        </button>
      </div>
      <input
        type="range"
        min={0}
        max={50}
        className="slider"
        value={tipPercentage}
        onChange={(e) => updateCustomValue(Number(e.target.value))}
      />
      <label>custom: {tipPercentage}</label>
    </div>
  );
}

function NumberOfPeople({ numberOfPeople, onhandleNumberOfPeople }) {
  return (
    <div className="number-of-people">
      <label>🧑‍🤝‍🧑 Number of People</label>
      <input
        type="number"
        value={numberOfPeople}
        min={1}
        onChange={(e) => onhandleNumberOfPeople(Number(e.target.value))}
      ></input>
    </div>
  );
}

function FinalBill({ tipAmount, total, numberOfPeople }) {
  const perPerson = total / numberOfPeople;
  return (
    <div className="final-bill">
      <div className="tip-amount">
        <strong>Tip Amount</strong>
        <span>${tipAmount}</span>
      </div>

      <div className="total-bill">
        <strong>Total</strong>
        <span>${total}</span>
      </div>

      <hr />

      <div className="per-person-bill">
        <strong>Per Person</strong>
        <span>${perPerson}</span>
      </div>
    </div>
  );
}

function Button({ onHandleClick, children }) {
  function handleOnClick() {
    onHandleClick();
  }
  return (
    <button className="button" onClick={handleOnClick}>
      {children}
    </button>
  );
}
