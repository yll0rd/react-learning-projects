"use strict";

function Calcutor() {
  return /*#__PURE__*/React.createElement("div", {
    className: "calculator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, "0"), /*#__PURE__*/React.createElement(CalcButton, {
    value: 7
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 8
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 9
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "/"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 4
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 5
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 6
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "*"
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 1
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 2
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 3
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
    className: props.className
  }, props.value);
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  className: "app-container"
}, /*#__PURE__*/React.createElement(Calcutor, null)), document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));