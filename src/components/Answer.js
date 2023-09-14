import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  selectedAnswer,
  correctAnswer,
}) => {
  const label = ["A", "B", "C", "D"];
  const isSelected =   selectedAnswer === answerText;
  const isCorrect = isSelected &&   selectedAnswer === correctAnswer;
  const isWrong = isSelected && !isCorrect;
  const isWrongSelectedAnswer = isSelected && !isCorrect;

  const answerClass = `answer ${isSelected ? "selected-answer" : ""} ${
    isCorrect ? "correct-answer" : ""
  } ${isWrong ? "wrong-answer" : ""}`;

  return (
    <>
    <div className={answerClass} onClick={() => onSelectAnswer(answerText)}>
      <div className="answer-label">{label[index]}</div>
      <div className="answer-text">{answerText}</div>
      {isWrongSelectedAnswer && (
        <div className="correct-answer-indicator">
          Correct Answer: {correctAnswer}
        </div>
      )}
    </div>
    
    </>
  );
};

export default Answer;