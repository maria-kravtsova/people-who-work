import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const fruit = ["bananas", "oranges", "apples", "pears"]

class Fruit extends React.Component {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type 'r', case insensitive"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.props.fruit}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}

export default class Food extends React.Component {

  render() {
    return (
      <Fruit fruit={fruit} />
    )
  }

}