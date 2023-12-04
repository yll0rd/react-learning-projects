const  Hello = () => {
    return (
    <div>
    <h1>Hello React, Hi</h1>    
    </div>
    )
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render(<Hello/>, document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));