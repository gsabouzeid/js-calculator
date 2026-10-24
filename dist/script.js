const App = () => {
  const [value, setValue] = React.useState("0");
  const [reset, setReset] = React.useState(false);

  const handleClear = () => {
    setValue("0");
  };

  const handleNumClick = e => {
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
      setValue(prevValue => prevValue + ".");
    }
  };

  const handleOperationClick = e => {
    setReset(false);
    const operation = document.getElementById(e.target.id).innerHTML;
    const lastChar = value.charAt(value.length - 1);
    if (
    operation === "-" && lastChar !== "-" ||
    !isNaN(lastChar) ||
    lastChar === ".")
    {
      setValue(prevValue => prevValue + operation);
    } else if (/^[*/+\-]$/.test(lastChar)) {
      const secondToLastChar = value.charAt(value.length - 2);
      if (/^[*/+\-]$/.test(secondToLastChar)) {
        setValue(prevValue => prevValue.slice(0, -2) + operation);
      } else {
        setValue(prevValue => prevValue.slice(0, -1) + operation);
      }
    }
  };

  const handleCalculation = () => {
    setValue(eval(value).toString());
    setReset(true);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "calculator" }, /*#__PURE__*/
    React.createElement("div", { id: "display" }, value), /*#__PURE__*/
    React.createElement("div", { id: "row1" }, /*#__PURE__*/
    React.createElement("button", { id: "clear", onClick: handleClear }, "AC"), /*#__PURE__*/


    React.createElement("button", { id: "divide", onClick: handleOperationClick }, "/")), /*#__PURE__*/



    React.createElement("div", { id: "row2" }, /*#__PURE__*/
    React.createElement("button", { id: "seven", onClick: handleNumClick }, "7"), /*#__PURE__*/


    React.createElement("button", { id: "eight", onClick: handleNumClick }, "8"), /*#__PURE__*/


    React.createElement("button", { id: "nine", onClick: handleNumClick }, "9"), /*#__PURE__*/


    React.createElement("button", { id: "multiply", onClick: handleOperationClick }, "*")), /*#__PURE__*/



    React.createElement("div", { id: "row3" }, /*#__PURE__*/
    React.createElement("button", { id: "four", onClick: handleNumClick }, "4"), /*#__PURE__*/


    React.createElement("button", { id: "five", onClick: handleNumClick }, "5"), /*#__PURE__*/


    React.createElement("button", { id: "six", onClick: handleNumClick }, "6"), /*#__PURE__*/


    React.createElement("button", { id: "subtract", onClick: handleOperationClick }, "-")), /*#__PURE__*/



    React.createElement("div", { id: "row4" }, /*#__PURE__*/
    React.createElement("button", { id: "one", onClick: handleNumClick }, "1"), /*#__PURE__*/


    React.createElement("button", { id: "two", onClick: handleNumClick }, "2"), /*#__PURE__*/


    React.createElement("button", { id: "three", onClick: handleNumClick }, "3"), /*#__PURE__*/


    React.createElement("button", { id: "add", onClick: handleOperationClick }, "+")), /*#__PURE__*/



    React.createElement("div", { id: "row5" }, /*#__PURE__*/
    React.createElement("button", { id: "zero", onClick: handleNumClick }, "0"), /*#__PURE__*/


    React.createElement("button", { id: "decimal", onClick: handleDecimalClick }, "."), /*#__PURE__*/


    React.createElement("button", { id: "equals", onClick: handleCalculation }, "="))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));