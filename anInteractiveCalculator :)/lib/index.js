"use strict";

var Hello = function Hello() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello React, Hi"));
};
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render( /*#__PURE__*/React.createElement(Hello, null), document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));