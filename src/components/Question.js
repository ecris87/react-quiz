import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';


class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <p className="question__text" style={{
            color: this.props.muiTheme.palette.textColor,
            fontFamily: this.props.muiTheme.fontFamily
        }}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default  muiThemeable()(Question);