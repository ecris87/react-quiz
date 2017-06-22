import React from 'react';
import {cyan500} from 'material-ui/styles/colors';

const logoStyle = {
    fontFamily: '"Lily Script One", cursive',
    fontSize: '40px',
    transform: 'rotate(-30deg)',
    position: 'absolute',
    top: 40,
    left: 20,
    lineHeight: '30px',
    color: cyan500
};

const Logo = (props) => <div style={logoStyle}>React<br/>Quiz</div>;

export default Logo;
