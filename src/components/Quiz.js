import React from 'react';
import questions from '../data/questions.json';
import Question from './Question';
import QuestionFooter from './QuestionFooter';
import AnswerList from './AnswerList';
import QuizNotice from './QuizNotice';
import QuizResults from './QuizResults';


class Quiz extends React.Component {
  initialState = {
      questionIndex: 0,
      selectedAnswerIndex: null,
      shouldShowQuestionFooter: false,
      shouldRevealCorrectAnswer: false,
      correctAnswers: 0,
      incorrectAnswers: 0
  }

  constructor() {
    super();
    this.state = this.initialState;
    this.onWrongAnswerChosen = this.onWrongAnswerChosen.bind(this);
    this.onRightAnswerChosen = this.onRightAnswerChosen.bind(this);
    this.displayNextQuestion = this.displayNextQuestion.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  startOver() {
    this.setState(this.initialState);
  }

  onRightAnswerChosen(answerIndex) {
    this.handleAnswer({index: answerIndex, isCorrect: true});
  }

  onWrongAnswerChosen(answerIndex) {
    this.handleAnswer({index: answerIndex, isCorrect: false});
  }

  handleAnswer(answer = {}) {
    if (this.state.shouldShowQuestionFooter) {
      return; // ignore any other answer that is clicked after the initial one
    }

    const trackingKey = (answer.isCorrect) ? 'correctAnswers' : 'incorrectAnswers';
    
    this.setState((prevState) => ({
      selectedAnswerIndex: answer.index,
      shouldRevealCorrectAnswer: !answer.isCorrect,
      shouldShowQuestionFooter: true,
      [trackingKey]: prevState[trackingKey] + 1
    }));
  }

  displayNextQuestion() {
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex + 1,
      selectedAnswerIndex: null,
      shouldRevealCorrectAnswer: false,
      shouldShowQuestionFooter: false
    }));
  }

  render() {
    const currentQuestion = questions[this.state.questionIndex];

    if (this.state.questionIndex === questions.length) {
      return <QuizResults 
        correctAnswers={this.state.correctAnswers} 
        incorrectAnswers={this.state.incorrectAnswers} 
        numberOfQuestions={questions.length}
        startOver={this.startOver} />
    } else if (!currentQuestion) {
      return <QuizNotice 
        text="Whops! Something went wrong" 
        startOver={this.startOver} />
    }

    return (
        <div className="quiz">
            <Question text={currentQuestion.text}/>

            <AnswerList answers={currentQuestion.answers} 
              onRightAnswerChosen={this.onRightAnswerChosen}
              onWrongAnswerChosen={this.onWrongAnswerChosen}
              shouldRevealCorrectAnswer={this.state.shouldRevealCorrectAnswer}
              selectedAnswerIndex={this.state.selectedAnswerIndex}/>

            {(this.state.shouldShowQuestionFooter) &&
              <QuestionFooter questionDetails={currentQuestion.details} displayNextQuestion={this.displayNextQuestion} />
            }
        </div>
    );
  }
}

export default Quiz;
