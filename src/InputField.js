import React from 'react';
import './App.css';


const InputField = ({ result, handleKeyPress, resetAll}) => {

    let key;
    let calcHistory = [];
    let ls = [];
   
    for (let i = 0; i <= localStorage.length-1; i++) {     
        key = localStorage.key(i);
        const data = JSON.parse(localStorage.getItem(key));
        ls.push(data);
    }

    ls.sort( (a, b) => parseFloat(b.id) - parseFloat(a.id));
    ls.map(m => calcHistory.push(m.calc));

    const display = (arr) => {
        let arrCopy = arr;
        let index = arr.indexOf('=');
        let first = arr.slice(0, index);
        let last = arrCopy.slice(index+1, arrCopy.length);

        console.log(arr);
        console.log(arrCopy);


        return (
            <div className="result">
                <p>{first}</p>
                <p id="eq">=</p>
                <p id="finalResult">{last}</p> 
            </div>
        );
        
    }


    
// add tooltip on hovering history

    return (
        <div className="input-field">
            <div className="container">
                <div className="history" onClick={resetAll}>
                    <ul className="ul"> 
                        {
                            calcHistory.map(result => (
                                <li 
                                    key={result}
                                    className="li"
                                >
                                    {display(result)}
                                </li>
                            ))
                        } 
                    
                    </ul>
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