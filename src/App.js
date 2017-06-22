import React from 'react';
import Quiz from './components/Quiz';
import Logo from './components/Logo';
import './App.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(lightBaseTheme, {
  fontFamily: 'Oswald, sans-serif'
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="quiz-app">
            <Logo />
            <Quiz />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
