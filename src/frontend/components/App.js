import React, { Component } from "react";
import "../stylesheets/App.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Food from "./Test";
import TextField from 'material-ui/TextField';

class App extends Component {

  clone = () => {
    React.cloneElement();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>

        <RaisedButton label="Focus" onTouchTap={() => this.TextField.focus()}/>
        <br />
        <TextField
      hintText="Some text" ref={(ref) => this.TextField = ref}
    />
      <Food />
      <RaisedButton label="Add another food" onTouchTap={this.clone}/>
    </div>
      </MuiThemeProvider>
    );
  }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default App;
