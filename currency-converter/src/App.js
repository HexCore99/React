import { useEffect, useState } from "react";

export default App;

const currencies = ["USD", "EUR", "AUD", "CAD", "ISK"];

function App() {
  const [rate, setRate] = useState(0);
  return (
    <div>
      <ConvertCurrency setRate={setRate} />
      <ShowResult rate={rate} />
    </div>
  );
}

function ConvertCurrency({ setRate }) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ISK");
  const [input, setInput] = useState(0);

  function handleSetFromCurrency(value) {
    setFromCurrency(value);
  }

  function handleSetToCurrency(value) {
    setToCurrency(value);
  }

  useEffect(
    function () {
      let rate = 0;
      async function fetchCurrency() {
        try {
          const res = await fetch(
            `https://api.frankfurter.dev/v1/latest?base=${fromCurrency}`
          );
          if (!res.ok)
            throw new Error("Something Went Wrong While Fetching Currencies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Currency not Found");

          rate = data.rates[toCurrency];
          setRate(rate === undefined ? input : rate * input);
        } catch (err) {
          console.log(err.message);
        }
      }

      fetchCurrency();
    },
    [fromCurrency, toCurrency, input, setRate]
  );

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Amount"
        onChange={(e) => setInput(Number(e.target.value))}
      />

      {/* From */}
      <span>
        <CurrencyMenu
          currency={fromCurrency}
          setCurrency={handleSetFromCurrency}
        />
      </span>

      {/* To */}
      <span>
        <CurrencyMenu currency={toCurrency} setCurrency={handleSetToCurrency} />
      </span>
    </div>
  );
}

function CurrencyMenu({ currency, setCurrency }) {
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      {currencies.map((code) => (
        <option key={code}>{code}</option>
      ))}
    </select>
  );
}

function ShowResult({ rate }) {
  console.log(rate);
  return (
    <div>
      <label>{rate}</label>
    </div>
  );
}
