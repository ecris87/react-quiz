import React from 'react';
import Paper from 'material-ui/Paper';

const defaultStyle = {
  width: 600,
  margin: '0 auto 40px auto',
  padding: '40px 20px',
  fontSize: '40px',
  textAlign: 'center',
};

const PaperWrapper = (props) => {
    const paperStyle = Object.assign({}, defaultStyle, props.style);
    return (
        <Paper className={props.className} style={paperStyle} zDepth={1}>
            {props.children}
        </Paper>
    );
}

export default PaperWrapper;