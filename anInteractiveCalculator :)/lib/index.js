"use strict";

function handleOperator(value) {}
function handleNumber(value) {
  alert("Handle number click " + value);
}
function Calculator() {
  return /*#__PURE__*/React.createElement("div", {
    className: "calculator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, "0"), /*#__PURE__*/React.createElement(CalcButton, {
    value: 7,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 8,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 9,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "/"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 4,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 5,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 6,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "*"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 1,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 2,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 3,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "-"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: "C"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 0
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: "="
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "+"
  }));
}
function CalcButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: props.className,
    onClick: function onClick() {
      props.onClick(props.value);
    }
  }, props.value);
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  className: "app-container"
}, /*#__PURE__*/React.createElement(Calculator, null)), document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));