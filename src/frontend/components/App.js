import React, { Component } from "react";
import "../stylesheets/App.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HorizontalNonLinearStepper from "./Test";
import TextField from 'material-ui/TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }
  }

  inFocus = () => this.setState({focus: true})

  render() {
    return (
      <MuiThemeProvider>
        <div>

        <RaisedButton label="Focus" onChange={this.inFocus}/>
        <br />
        <TextField
      hintText="Some text" autoFocus={this.state.focus}
    />
    </div>
      </MuiThemeProvider>
    );
  }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default App;
