import React from 'react';
import './App.css';


const Button = ({handleButtonClick, number}) => (
    
    <div className="buttons">
        
        <button className="button" name="7" onClick={handleButtonClick}>7</button>
        <button className="button" name="8" onClick={handleButtonClick}>8</button>
        <button className="button" name="9" onClick={handleButtonClick}>9</button>
        <button className="button" name="/" onClick={handleButtonClick}>/</button>
        <button className="button" name="BACKSPACE" onClick={handleButtonClick}>&#8592;</button>
        <button className="button" name="DELETE" onClick={handleButtonClick}>C</button><br />

        <button className="button" name="4" onClick={handleButtonClick}>4</button>
        <button className="button" name="5" onClick={handleButtonClick}>5</button>
        <button className="button" name="6" onClick={handleButtonClick}>6</button>
        <button className="button" name="*" onClick={handleButtonClick}>*</button>
        <button className="button" name="(" onClick={handleButtonClick}>(</button>
        <button className="button" name=")" onClick={handleButtonClick}>)</button><br />

        <button className="button" name="1" onClick={handleButtonClick}>1</button>
        <button className="button" name="2" onClick={handleButtonClick}>2</button>
        <button className="button" name="3" onClick={handleButtonClick}>3</button>
        <button className="button" name="-" onClick={handleButtonClick}>-</button>
        <button className="button" name="POWER" onClick={handleButtonClick}>^2</button>
        <button className="button" name="SQRT" onClick={handleButtonClick}>&#x221A;</button><br />

        <button className="button" name="0" onClick={handleButtonClick}>0</button>
        <button className="button" name="." onClick={handleButtonClick}>.</button>
        <button className="button" name="%" onClick={handleButtonClick}>%</button>
        <button className="button" name="+" onClick={handleButtonClick}>+</button>
        <button className="button equal" name="=" onClick={handleButtonClick}>=</button>
        

    </div>
);

export default Button;