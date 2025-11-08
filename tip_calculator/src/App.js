import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const [satisfaction, setSatisFaction] = useState("Dissatisfied-0");
  const [frndSatisfaction, setFrndSatisFaction] = useState("Dissatisfied-0");

  function handleBill(val) {
    setBill(val);
  }

  function handleSatisfaction(satisfied) {
    setSatisFaction(satisfied);
    const val = parseInt(satisfied.split("-")[1].trim(), 10);
    setTip1(val);
  }

  function handleFrndSatisfaction(satisfied) {
    setFrndSatisFaction(satisfied);
    const val = parseInt(satisfied.split("-")[1].trim(), 10);
    console.log(val);

    setTip2((v) => val);
  }
  function handleResetButton() {
    setBill(0);
    setSatisFaction("Dissatisfied-0");
    setFrndSatisFaction("Dissatisfied-0");
    setTip1(0);
    setTip2(0);
  }

  const tip = (bill * (tip1 + tip2)) / 200;
  return (
    <div className="container">
      <Bill bill={bill} onHandleBill={handleBill} />
      <SatisFactionLevel
        satisfaction={satisfaction}
        onhandleSatisfaction={handleSatisfaction}
      >
        How did you like the service?
      </SatisFactionLevel>

      <SatisFactionLevel
        satisfaction={frndSatisfaction}
        onhandleSatisfaction={handleFrndSatisfaction}
      >
        How did your friend like the service?
      </SatisFactionLevel>

      <FinalBill bill={bill} tip={tip} onHandleClick={handleResetButton} />
    </div>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="number"
          value={bill}
          onChange={(e) => onHandleBill(e.target.value)}
        ></input>
      </p>
    </div>
  );
}

function SatisFactionLevel({ satisfaction, onhandleSatisfaction, children }) {
  return (
    <div className="satisfy-level">
      <span>{children}</span>
      <select
        value={satisfaction}
        onChange={(e) => onhandleSatisfaction(e.target.value)}
      >
        <option value="Dissatisfied-0">Dissatisfied(0%)</option>
        <option value="okay-5"> It was okay (5%)</option>
        <option value="good-10"> It was good (10%)</option>
        <option value="amazing-20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FinalBill({ bill, tip, onHandleClick }) {
  return (
    <div className="final-bill">
      <p>
        <b>
          You Pay ${Number(bill) + Number(tip)} (${bill} + ${tip} tip)
        </b>
      </p>
      <button onClick={onHandleClick}>Reset</button>
    </div>
  );
}

export default App;
