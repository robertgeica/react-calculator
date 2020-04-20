import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

import InputField from './InputField';
import Header from './Header';

const App = () => {

	const [result, setResult] = useState('');
	const [history, setHistory]= useState('');


	const handleKeyPress = (e) => {
		e.preventDefault();

		if(e.key === 'Enter') calculate();
		if(e.key === 'Backspace') backspace();
		if(e.key === 'Escape') reset();


		const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
		
		if(nums.includes(e.key)) {
			setResult(result + e.key);
			setHistory(`${result}${e.key}`);

			console.log(history);
		}

	
	}

	// place input line after last leter
	// push and keep to history
	// undefined on button click
	// check for errors

	
	const handleButtonClick = (e) => {
		e.preventDefault();

		if(e.target.name === '=') {
			calculate();
		} else if(e.target.name === 'BACKSPACE') {
			backspace();	
		} else if(e.target.name === 'SQRT') {
			sqrt();	
		} else if(e.target.name === 'DELETE') {
			reset();	
		} else if(e.target.name === 'POWER') {
			power();	
		} else {
			setResult(result + e.target.name);
			setHistory(`${result}${e.key}`);
			
		}

	}

	
	const calculate = () => {
		setResult( eval(result) );
	}

	const backspace = () => {
		setResult(result.slice(0, -1));
	}

	const sqrt = () => {
		setResult(Math.sqrt(result))
	}

	const power = () => {
		setResult(result * result);
	}

	const reset = () => {
		setResult('');
	}

  	return (
    	<div className="App">
			<Header />
			<InputField 
				history={history}
				handleKeyPress={handleKeyPress}
				result={result}
			/>
				
			<Button handleButtonClick={handleButtonClick} />
    	</div>
  	);
}

export default App;
