// This component does not necessarily need to be
// a seperate file and could've just been done within
// the App.tsx file, however I made it a component in
import './calculator.css';
import {useState} from 'react';

// order to demonstrate the use of components in React.
const Calculator = () => {        
    const [sumNumber, setSumNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState("");

    const calculateSum = () => {
        let strOld: number = parseFloat(oldNumber.toString());
        let strSum: number = parseFloat(sumNumber.toString());
        switch(operator) {
            case '+':
                setSumNumber(strOld + strSum);
                break;
            case '-':
                setSumNumber(strOld - strSum);
                break;    
            case '/':
                setSumNumber(strOld / strSum);
                break;
            case 'x':
                setSumNumber(strOld * strSum);
                break;
        }
    }

    const handleOperator = (e: any) => {
        let operator = e.target.value;
        setOperator(operator);
        setOldNumber(sumNumber);
        setSumNumber(0);
    }

    const addNum = (e: any) => {
        let temp: number = e.target.value;
        if (sumNumber === 0) {
            setSumNumber(temp);
        } else {
            setSumNumber(sumNumber + temp);
        }
    }

    const clearSum = () => {
        setSumNumber(0);
    }

    const calcUI = (
        
        <div className="container">
                <h1>{sumNumber}</h1>
                <div className="calcUI">
                    <button className="calcButton" type="button" onClick={addNum} value={7}>7</button>
                    <button className="calcButton" type="button" onClick={addNum} value={8}>8</button>
                    <button className="calcButton" type="button" onClick={addNum} value={9}>9</button>
                    <button className="calcButton" type="button" onClick={handleOperator} value="+">+</button>
                    <button className="calcButton" type="button" onClick={addNum} value={4}>4</button>
                    <button className="calcButton" type="button" onClick={addNum} value={5}>5</button>
                    <button className="calcButton" type="button" onClick={addNum} value={6}>6</button>
                    <button className="calcButton" type="button" onClick={handleOperator} value="x">*</button>
                    <button className="calcButton" type="button" onClick={addNum} value={1}>1</button>
                    <button className="calcButton" type="button" onClick={addNum} value={2}>2</button>
                    <button className="calcButton" type="button" onClick={addNum} value={3}>3</button>
                    <button className="calcButton" type="button" onClick={handleOperator} value="-">-</button>
                    <button className="calcButton" type="button" onClick={addNum} value={0}>0</button>
                    <button className="calcButton" type="button" onClick={clearSum}>AC</button>
                    <button className="calcButton" type="button" onClick={calculateSum} value="=">=</button>
                    <button className="calcButton" type="button" onClick={handleOperator} value="/">÷</button>
                </div>
        </div>
    )

    return calcUI;
}

export default Calculator;