import React, { Component } from "react";
import "../stylesheets/App.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HorizontalNonLinearStepper from "./Test";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HorizontalNonLinearStepper/>
      </MuiThemeProvider>
    );
  }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default App;
