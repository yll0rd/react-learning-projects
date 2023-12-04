function handleOperator() {}
function handleNumber() {
    alert("Handle number click");
}

function Calculator () {
    return (
        <div className='calculator'>
            <div className="display">0</div>
            <CalcButton value={7} onClick={handleNumber}/>
            <CalcButton value={8} onClick={handleNumber}/>
            <CalcButton value={9} onClick={handleNumber}/>
            <CalcButton className='operator' value="/"/>
        
            <CalcButton value={4} onClick={handleNumber}/>
            <CalcButton value={5} onClick={handleNumber}/>
            <CalcButton value={6} onClick={handleNumber}/>
            <CalcButton className='operator' value="*"/>

            <CalcButton value={1} onClick={handleNumber}/>
            <CalcButton value={2} onClick={handleNumber}/>
            <CalcButton value={3} onClick={handleNumber}/>
            <CalcButton className='operator' value="-"/>

            <CalcButton value='C'/>
            <CalcButton value={0}/>
            <CalcButton value='='/>
            <CalcButton className='operator' value="+"/>
        </div>
    )
}
function CalcButton (props) {
    return <button className={props.className} onClick={props.onClick}>{props.value}</button>
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render(<div className='app-container'><Calculator/></div>, document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));