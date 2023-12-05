function Calculator () {
    const [calc, setCalc] = React.useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ""
    })
    function handleOperator(value) {
        const total = doCalculation();
        console.log(total)
        setCalc({current: total.toString(), total: total.toString(), isInitial: true, preOp: value});
    }
    function doCalculation() {
        let total = parseInt(calc.total);
        // debugger;
        console.log(calc)
        switch(calc.preOp) {
            case "+":
                total += parseInt(calc.current)
                break; 
            case "-":
                total -= parseInt(calc.current)
                break;
            case "*":
                // calc.current === '0' ? total *= 1 : total *= parseInt(calc.current)
                total *= parseInt(calc.current)
                break;
            case "/":
                total /= parseInt(calc.current)
                // calc.current === '0' ? total /= 1 : total /= parseInt(calc.current)
                break;
            default:
                total = parseInt(calc.current)
                break;
        }   
        return total;
    }

    function handleNumber(value) {
        let newValue = value.toString()
        if (!calc.isInitial){
            newValue = calc.current + newValue
        }
        
        setCalc({current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp});
    }

    function renderDisplay () {
        return calc.current
    }

    function handleClear () {
        setCalc({
            current: "0",
            total: "0",
            isInitial: true,
            preOp: ""
        })
    }

    return (
        <div className='calculator'>
            <div className="display">{renderDisplay()}</div>
            <CalcButton value={7} onClick={handleNumber}/>
            <CalcButton value={8} onClick={handleNumber}/>
            <CalcButton value={9} onClick={handleNumber}/>
            <CalcButton className='operator' value="/" onClick={handleOperator}/>
        
            <CalcButton value={4} onClick={handleNumber}/>
            <CalcButton value={5} onClick={handleNumber}/>
            <CalcButton value={6} onClick={handleNumber}/>
            <CalcButton className='operator' value="*" onClick={handleOperator}/>

            <CalcButton value={1} onClick={handleNumber}/>
            <CalcButton value={2} onClick={handleNumber}/>
            <CalcButton value={3} onClick={handleNumber}/>
            <CalcButton className='operator' value="-" onClick={handleOperator}/>

            <CalcButton value='C' onClick={handleClear}/>
            <CalcButton value={0} onClick={handleNumber}/>
            <CalcButton value='=' onClick={handleOperator}/>
            <CalcButton className='operator' value="+" onClick={handleOperator}/>
        </div>
    )
}
function CalcButton (props) {
    return <button className={props.className} onClick={() => {props.onClick(props.value)}}>{props.value}</button>
}
// const hello = React.createElement('h1', {}, 'Hello React');
ReactDOM.render(<div className='app-container'><Calculator/></div>, document.querySelector(".root"));
// ReactDOM.render(hello(), document.querySelector(".root"));