import React from 'react';
import './App.css';


const InputField = ({history, result, handleKeyPress}) => {


    return (
    <div className="input-field">

        <div className="container">

        <div className="history">
            <p>{ history } <span>=</span> {result}</p>
        </div>
        
        <form className="form">
            <input 
                className="input" 
                type="text" 
                defaultValue={result} 
                onKeyDown={handleKeyPress}
            
            />
        </form>
        </div>
    </div>

    );

};

export default InputField;