import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const defaultStyle = {
    lineHeight: '36px',
    fontSize: '14px',
    color: '#ffffff'
};

const PrimaryButton = (props) => {
    const {label, onClick, style, ...otherProps} = props;
    const buttonStyle = Object.assign({}, defaultStyle, style);
    return (<RaisedButton 
        label={props.label}
        onClick={props.onClick}
        style={buttonStyle} 
        primary={true} 
        {...otherProps}/>
    );
};

export default PrimaryButton;
