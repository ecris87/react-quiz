import React from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import {green700, red700, grey400} from 'material-ui/styles/colors';


class Answer extends React.Component {
    constructor() {
        super();
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
    }

    handleAnswerClick() {
        let selectedAnswerIndex = this.props.index;
        if (this.props.valid) {
            this.props.onRightAnswerChosen(selectedAnswerIndex);
        } else {
            this.props.onWrongAnswerChosen(selectedAnswerIndex);
        }
    }

    render() {
        const isCorrect = this.props.valid;
        const isSelectedAnswer = this.props.index === this.props.selectedAnswerIndex;

        let answerValidity = null;
        let iconColor = grey400;

        if (isCorrect && (this.props.shouldRevealCorrectAnswer || isSelectedAnswer)) {
            answerValidity = <span style={{color: green700}}>CORRECT</span>;
            iconColor = green700;
        } else if (isSelectedAnswer) {
            answerValidity = <span style={{color: red700}}>INCORRECT</span>;
            iconColor = red700;
        }

        return (
            <div>
                <ListItem className="answer"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                    primaryText={this.props.text.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                    secondaryText={answerValidity}
                    leftIcon={<ActionGrade color={iconColor}/>} 
                    onClick={this.handleAnswerClick}
                />
                {(this.props.index < this.props.totalNumberOfAnswers - 1) && <Divider />}
            </div>
        );
    }
}

export default Answer;