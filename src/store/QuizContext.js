import React, { createContext, useState, useEffect } from "react";
import questions from "../quizData";

const shuffleOptions = (question) => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [question.correctAnswer, ...question.wrongAnswers];
  return unshuffledAnswers.sort(() => Math.random() - 0.5);
};

const initialState = {
  questions,
  currentQuestionIndex: 0,
  selectedAnswer: "",
  answers: shuffleOptions(questions[0]),
  showResults: false,
  correctAnswersCount: 0, 
};

export const QuizContext = createContext();


export const QuizProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [timerSeconds, setTimerSeconds] = useState(10);


  const selectAnswer = (answer) => {
    setState((prevState) => ({
      ...prevState,
      selectedAnswer: answer,
      correctAnswersCount:
        answer ===
        prevState.questions[prevState.currentQuestionIndex].correctAnswer
          ? prevState.correctAnswersCount + 1
          : prevState.correctAnswersCount,
    }));

  };

  const nextQuestion = () => {
    setState((prevState) => {
      const currentQuestionIndex = prevState.currentQuestionIndex + 1;
      const showResults = currentQuestionIndex === prevState.questions.length;
      const answers = showResults
        ? []
        : shuffleOptions(prevState.questions[currentQuestionIndex]);
  
      return {
        ...prevState,
        selectedAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    });
  };
  

  const resetQuiz = () => {
    setState(initialState);
    
  };

  const value = {
    state,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    timerSeconds
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
