import React from 'react';
import {SafeAreaView} from 'react-native';

import InputBarContainer from '../containers/InputBarContainer';
import TodoListContainer from '../containers/TodoListContainer';
import LoadingContainer from '../containers/LoadingContainer';

class MainScreen extends React.Component {
  componentDidMount() {
    this.props.fetchTodoListAction();
  }
  render() {
    // console.log(this.props);
    return (
      <SafeAreaView>
        <InputBarContainer />
        <LoadingContainer />
        <TodoListContainer navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default MainScreen;
