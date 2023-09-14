import './App.css';
import Quiz from './components/Quiz';
import React, {useState} from 'react';
import Button from './UI/Button';

function App() {
  const [start, setStart] = useState(false);
  const startQuizHandler = () =>{
  
    setStart(true)
  }
  return (
    <div className="App">

      {!start && (
     <div>
      <h2 style={{fontFamily:"Roboto"}}>Start your Quiz by clicking start button</h2>
        <Button buttonName="start" onClick={startQuizHandler} style={{width:"7.8rem", backgroundColor:"#1ea55b", color:"white"}}/>
      </div>
      )}

      { start && <Quiz />}
    </div>
  );
}

export default App;
