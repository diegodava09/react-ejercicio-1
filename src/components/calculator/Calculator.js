import Resultado from '../resultado/Resultado.js';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Calculator(props) {

    const select = (event) => {
        const value = parseInt(event.target.value)
        setOperation(value)
    }


    const ids = {
        "+":0,
        "-":1,
        "x":2,
        "/":3
    }

    const [operation,setOperation] = useState(0)
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const buttons = Object.entries(ids).map(([key,value]) => 
        <Button variant={operation === value ? "danger" : "primary" } key={value} value={value} onClick={select}>{key.toString()}</Button>
    )

    return (
        <div>
            <div className='m-3'>    
                <form>
                    <div className="row w-50  gap-1">
                        <div className='col'><input type="number" className="form-control" id="num1" placeholder="Número 1" onChange={e => setNum1(e.target.value)} /></div>
                        <div className='col'><input type="number" className="form-control" id="num2" placeholder="Número 2" onChange={e => setNum2(e.target.value)} /></div>
                    </div>
                </form>
            </div>
            <div className="d-flex flex-row justify-content-between w-25 m-3">
                {buttons}
            </div>

            <div className='m-3'>
                <Resultado op={operation} num1={num1} num2={num2}></Resultado>   
            </div>
        </div>
    );
}

export default Calculator;