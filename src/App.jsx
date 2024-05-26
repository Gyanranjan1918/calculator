
import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };


  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <>
      <div className="container">
        <div className="calBody">
        <div className="inputBody"><input type="text" value={input} />
        </div>
        <div className="btnBody">
          <div className="numDiv">
            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput('2')} >2</button>
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button onClick={() => handleInput('0')}>0</button>
        <button className="clrBtn" onClick={clearInput}>clr</button>
        <button className="calBtn" onClick={calculateResult}>calculate</button>
          </div>
          <div className="actionDiv">
            <button onClick={() => handleInput('+')}>+</button>
            <button onClick={() => handleInput('-')}>-</button>
            <button onClick={() => handleInput('/')}>/</button>
            <button onClick={() => handleInput('*')}>*</button>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}

export default App
