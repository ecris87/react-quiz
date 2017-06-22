import React from 'react';
import {List} from 'material-ui/List';
import PaperWrapper from '../common/PaperWrapper';
import Answer from './Answer';

const paperStyle = {
  textAlign: 'left', 
  padding: '0'
};

const AnswerList = (props) => {
    return (
        <PaperWrapper style={paperStyle} className="answers">
            <List>
                {props.answers.map((answer, index) => 
                    <Answer key={index} 
                        index={index} 
                        totalNumberOfAnswers={props.answers.length}
                        {...answer} 
                        {...props}/>
                )}
            </List>
        </PaperWrapper>
    );
}

export default AnswerList;
