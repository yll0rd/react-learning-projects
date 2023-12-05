"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Calculator() {
  var _React$useState = React.useState({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    calc = _React$useState2[0],
    setCalc = _React$useState2[1];
  function handleOperator(value) {
    var total = doCalculation();
    console.log(total);
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value
    });
  }
  function doCalculation() {
    var total = parseInt(calc.total);
    // debugger;
    console.log(calc);
    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        // calc.current === '0' ? total *= 1 : total *= parseInt(calc.current)
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        // calc.current === '0' ? total /= 1 : total /= parseInt(calc.current)
        break;
      default:
        total = parseInt(calc.current);
        break;
    }
    return total;
  }
  function handleNumber(value) {
    var newValue = value.toString();
    if (!calc.isInitial) {
      newValue = calc.current + newValue;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp
    });
  }
  function renderDisplay() {
    return calc.current;
  }
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "calculator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, renderDisplay()), /*#__PURE__*/React.createElement(CalcButton, {
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
    value: "/",
    onClick: handleOperator
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
    value: "*",
    onClick: handleOperator
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
    value: "-",
    onClick: handleOperator
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: "C",
    onClick: handleClear
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: 0,
    onClick: handleNumber
  }), /*#__PURE__*/React.createElement(CalcButton, {
    value: "=",
    onClick: handleOperator
  }), /*#__PURE__*/React.createElement(CalcButton, {
    className: "operator",
    value: "+",
    onClick: handleOperator
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