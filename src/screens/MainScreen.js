import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import InputBarContainer from '../containers/InputBarContainer';
import TodoListContainer from '../containers/TodoListContainer';
import LoadingContainer from '../containers/LoadingContainer';

const MainScreen = ({fetchTodoListAction, navigation}) => {
  useEffect(() => {
    fetchTodoListAction();
  }, []);

  return (
    <SafeAreaView>
      <InputBarContainer />
      <LoadingContainer />
      <TodoListContainer navigation={navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;
