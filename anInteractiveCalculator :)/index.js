const  Hello = (props) => {
    return (
    <div>
    <h1>Hello React, Hi {props.name}. I'm {props.age} years old</h1>    
    </div>
    )
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render(<Hello name='bob' age={11}/>, document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));