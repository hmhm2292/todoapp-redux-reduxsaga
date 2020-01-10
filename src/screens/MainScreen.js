import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import InputBarContainer from '../containers/InputBarContainer';
import TodoListContainer from '../containers/TodoListContainer';

class MainScreen extends React.Component {
  // componentDidMount = () => {
  //   this.props.fetchTodoListAction();
  // };

  render() {
    console.log(this.props);
    return (
      <SafeAreaView>
        <InputBarContainer />
        <TodoListContainer />
      </SafeAreaView>
    );
  }
}

export default MainScreen;
