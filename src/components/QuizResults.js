import React from 'react';
import PaperWrapper from '../common/PaperWrapper';
import PrimaryButton from '../common/PrimaryButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { pink100, pink700 } from 'material-ui/styles/colors';

const iconStyle = {
    lineHeight: '36px',
    paddingRight: '12px'
}

const getResultSummaryClass = (percentCorrect) => {
    let resultsSummaryClass;
    if (percentCorrect === 100) {
        resultsSummaryClass = 'icon-emo-beer';
    } else if (percentCorrect >= 75) {
        resultsSummaryClass = 'icon-emo-thumbsup';
    } else if (percentCorrect >= 50) {
        resultsSummaryClass = 'icon-emo-happy';
    } else if (percentCorrect >= 25) {
        resultsSummaryClass = 'icon-emo-displeased';
    } else {
        resultsSummaryClass = 'icon-emo-unhappy';
    }
    return resultsSummaryClass;
}

const QuizResults = (props) => {
    const {correctAnswers, incorrectAnswers, numberOfQuestions} = props;
    let percentCorrect = (correctAnswers * 100) / numberOfQuestions;
    let resultsSummaryClass = getResultSummaryClass(percentCorrect);
    console.log(percentCorrect + '%');

    return (
        <div className="quiz">
            <PaperWrapper>
                <Avatar icon={<FontIcon className={resultsSummaryClass} style={iconStyle}/>}
                        color={pink700}
                        backgroundColor={pink100}
                        size={60}/>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Incorrect Answers: {incorrectAnswers}</p>
                <PrimaryButton 
                    label="START OVER" 
                    onClick={props.startOver}/>
            </PaperWrapper>
        </div>
    );
}

export default QuizResults;
