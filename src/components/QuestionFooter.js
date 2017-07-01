import React from 'react';
import { grey600 } from 'material-ui/styles/colors';
import PrimaryButton from '../common/PrimaryButton';

const QuestionFooter = (props) => {
    return (
        <footer>
            <p style={{fontStyle: 'italic', color: grey600, marginBottom: '40px', padding: '0 100px'}}>
                {props.questionDetails}
            </p>
            <PrimaryButton label="NEXT" onClick={props.displayNextQuestion}/>
        </footer>
    );
}

export default QuestionFooter;
