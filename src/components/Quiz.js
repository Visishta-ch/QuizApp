import React, { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "./Question";
import Button from "../UI/Button";


const Quiz = () => {
  const { state, resetQuiz } = useContext(QuizContext);

  return (
    <div className="quiz-container">
      <h2 className="header">Quiz Game Built using React</h2>
      {state.showResults && (
        <>
          <div>
            Test Ended
            <p>Your score is {state.correctAnswersCount} out of {state.questions.length } </p>
          </div>

          <div>
            <Button
              buttonName="restart"
              style={{
                backgroundColor: "#1ea55b",
                width: "7.8rem",
                color:"white"
              }}
              onClick={resetQuiz}
            />
          </div>
        </>
      )}

      {!state.showResults && (
        <>
          <Question />
        </>
      )}
    </div>
  );
};

export default Quiz;
