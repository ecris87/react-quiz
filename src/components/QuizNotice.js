import React from 'react';
import PaperWrapper from '../common/PaperWrapper';
import PrimaryButton from '../common/PrimaryButton';


const QuizNotice = (props) => {
    return (
        <div className="quiz">
            <PaperWrapper>
                <p>{props.text}</p>
                <PrimaryButton 
                    label="START OVER" 
                    onClick={props.startOver}/>
            </PaperWrapper>
        </div>
    );
}

export default QuizNotice;
