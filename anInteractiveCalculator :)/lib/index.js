"use strict";

var Hello = function Hello(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello React, Hi ", props.name, ". I'm ", props.age, " years old"));
};
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render( /*#__PURE__*/React.createElement(Hello, {
  name: "bob",
  age: 11
}), document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));