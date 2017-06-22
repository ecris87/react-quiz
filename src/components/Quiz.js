import React from 'react';
import questions from '../data/questions.json';
import PrimaryButton from '../common/PrimaryButton';
import Question from './Question';
import AnswerList from './AnswerList';
import QuizNotice from './QuizNotice';
import QuizResults from './QuizResults';
import { grey600 } from 'material-ui/styles/colors';


class Quiz extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.onWrongAnswerChosen = this.onWrongAnswerChosen.bind(this);
    this.onRightAnswerChosen = this.onRightAnswerChosen.bind(this);
    this.displayNextQuestion = this.displayNextQuestion.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  getInitialState() {
    return {
      questionIndex: 0,
      selectedAnswerIndex: null,
      shouldRevealCorrectAnswer: false,
      correctAnswers: 0,
      incorrectAnswers: 0
    };
  }

  startOver() {
    this.setState(this.getInitialState());
  }

  onRightAnswerChosen(answerIndex) {
    this.setState({
      selectedAnswerIndex: answerIndex,
      shouldRevealCorrectAnswer: false
    });
    this.trackScore({isCorrect: true});
    this.displayNextQuestion();
  }

  onWrongAnswerChosen(answerIndex) {
    this.setState({
      selectedAnswerIndex: answerIndex,
      shouldRevealCorrectAnswer: true
    });
    this.trackScore({isCorrect: false});
  }

  trackScore(options = {}) {
    let trackingKey = (options.isCorrect) ? 'correctAnswers' : 'incorrectAnswers';
    this.setState((prevState) => ({
        [trackingKey]: prevState[trackingKey] + 1
    }));
  }

  displayNextQuestion() {
    setTimeout(() => {
      this.setState((prevState) => ({
        questionIndex: prevState.questionIndex + 1,
        selectedAnswerIndex: null,
        shouldRevealCorrectAnswer: false
      }));
    }, 500);
  }

  render() {
    const currentQuestion = questions[this.state.questionIndex];

    if (this.state.questionIndex === questions.length) {
      return <QuizResults 
        correctAnswers={this.state.correctAnswers} 
        incorrectAnswers={this.state.incorrectAnswers} 
        numberOfQuestions={questions.length}
        startOver={this.startOver}/>
    }

    if (!currentQuestion) {
      return <QuizNotice 
        text="Whops! Something went wrong" 
        startOver={this.startOver}/>
    }

    return (
        <div className="quiz">
            <Question text={currentQuestion.text}/>

            <AnswerList answers={currentQuestion.answers} 
              onRightAnswerChosen={this.onRightAnswerChosen}
              onWrongAnswerChosen={this.onWrongAnswerChosen}
              shouldRevealCorrectAnswer={this.state.shouldRevealCorrectAnswer}
              selectedAnswerIndex={this.state.selectedAnswerIndex}/>

            {(this.state.shouldRevealCorrectAnswer) &&
              <p style={{fontStyle: 'italic', color: grey600, marginBottom: '40px'}}>
                {currentQuestion.details}
              </p>
            }
            
            {(this.state.shouldRevealCorrectAnswer) && 
              <PrimaryButton label="NEXT" onClick={this.displayNextQuestion}/>}
        </div>
    );
  }
}

export default Quiz;
