const App = () => {
  const [value, setValue] = React.useState("0");
  const [reset, setReset] = React.useState(false);

  const handleClear = () => {
    setValue("0");
  };

  const handleNumClick = (e) => {
    const num = document.getElementById(e.target.id).innerHTML;
    let newNum = value;
    if (reset) {
      setReset(false);
      setValue(num);
    } else {
      if (value === "0") {
        newNum = num;
      } else {
        newNum = value + num;
      }
      setValue(newNum);
    }
  };

  const handleDecimalClick = () => {
    const numbers = value.split(/[*/+-]/);
    if (!numbers[numbers.length - 1].includes(".")) {
      setValue((prevValue) => prevValue + ".");
    }
  };

  const handleOperationClick = (e) => {
    setReset(false);
    const operation = document.getElementById(e.target.id).innerHTML;
    const lastChar = value.charAt(value.length - 1);
    if (
      (operation === "-" && lastChar !== "-") ||
      !isNaN(lastChar) ||
      lastChar === "."
    ) {
      setValue((prevValue) => prevValue + operation);
    } else if (/^[*/+\-]$/.test(lastChar)) {
      const secondToLastChar = value.charAt(value.length - 2);
      if (/^[*/+\-]$/.test(secondToLastChar)) {
        setValue((prevValue) => prevValue.slice(0, -2) + operation);
      } else {
        setValue((prevValue) => prevValue.slice(0, -1) + operation);
      }
    }
  };

  const handleCalculation = () => {
    setValue(eval(value).toString());
    setReset(true);
  };

  return (
    <div id="calculator">
      <div id="display">{value}</div>
      <div id="row1">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="divide" onClick={handleOperationClick}>
          /
        </button>
      </div>
      <div id="row2">
        <button id="seven" onClick={handleNumClick}>
          7
        </button>
        <button id="eight" onClick={handleNumClick}>
          8
        </button>
        <button id="nine" onClick={handleNumClick}>
          9
        </button>
        <button id="multiply" onClick={handleOperationClick}>
          *
        </button>
      </div>
      <div id="row3">
        <button id="four" onClick={handleNumClick}>
          4
        </button>
        <button id="five" onClick={handleNumClick}>
          5
        </button>
        <button id="six" onClick={handleNumClick}>
          6
        </button>
        <button id="subtract" onClick={handleOperationClick}>
          -
        </button>
      </div>
      <div id="row4">
        <button id="one" onClick={handleNumClick}>
          1
        </button>
        <button id="two" onClick={handleNumClick}>
          2
        </button>
        <button id="three" onClick={handleNumClick}>
          3
        </button>
        <button id="add" onClick={handleOperationClick}>
          +
        </button>
      </div>
      <div id="row5">
        <button id="zero" onClick={handleNumClick}>
          0
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button id="equals" onClick={handleCalculation}>
          =
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
