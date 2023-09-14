import React,{useState,useContext, useEffect} from 'react'
import Answer from './Answer';
import { QuizContext } from '../store/QuizContext';
import Button from '../UI/Button';
import { ImHourGlass } from "react-icons/im";

const Question = () => {
    const {state, selectAnswer, resetQuiz, nextQuestion,timerSeconds,} = useContext(QuizContext);
    const currentQuestion = state.questions[state.currentQuestionIndex]
    const questionNumber = state.currentQuestionIndex+1
    console.log(questionNumber) 
    const [secondsRemaining, setSecondsRemaining] = useState(timerSeconds);
    const [timerExpired, setTimerExpired] = useState(false);
    

    useEffect(() => {
      let timer;  
      if (secondsRemaining > 0) {
        timer = setInterval(() => {
          setSecondsRemaining((prev) => prev - 1);
        }, 1000);
      } else if (!timerExpired) {
        setTimerExpired(true);
        nextQuestion();
      }
      return () => clearInterval(timer);
    }, [secondsRemaining, timerExpired, nextQuestion]);

    useEffect(() => {
      setSecondsRemaining(timerSeconds);
      setTimerExpired(false)
    }, [state.currentQuestionIndex, timerSeconds]);
  
  
   return (
     <>
       <div className="timer">
         <div style={{ textAlign: "center", color: "black" }}>
           {questionNumber}. {currentQuestion.question}
         </div>
         <div>
           <ImHourGlass style={{color:"red"}}/>
           <span className="timer-box">{secondsRemaining}</span>
         </div>
       </div>

       <div className="options">
         {state.answers.map((ans, idx) => (
           
           <Answer
             key={idx}
             index={idx}
             answerText={ans}
            
             onSelectAnswer={selectAnswer}
             selectedAnswer={state.selectedAnswer}
             correctAnswer={currentQuestion.correctAnswer}
           />
         ))}
       </div>
       <div style={{ display: "flex", justifyContent: "space-between" }}>
         <div style={{ textAlign: "left" }}>
           {questionNumber > 1 && (
             <Button
               buttonName="Reset"
               style={{
                 backgroundColor: "rgba(148,187,233,1)",
                 width: "7.8rem",
               }}
               onClick={resetQuiz}
             />
           )}
         </div>
         <div>
           {state.selectedAnswer && (
             <div
               style={{
                 textAlign: "right",
                 display: "flex",
                 justifyContent: "space-between",
               }}
             >
               <Button
                 buttonName="Next"
                 style={{
                   backgroundColor: "rgba(148,187,233,1)",
                   width: "7.8rem",
                 }}
                 onClick={nextQuestion}
               />
             </div>
           )}
         </div>
       </div>
     </>
   );
}

export default Question