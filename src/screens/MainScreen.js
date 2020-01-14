import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import InputBarContainer from '../containers/InputBarContainer';
import TodoListContainer from '../containers/TodoListContainer';
import LoadingContainer from '../containers/LoadingContainer';
import FilterBarContainer from '../containers/FilterBarContainer';

const MainScreen = ({fetchTodoListAction, navigation}) => {
  useEffect(() => {
    fetchTodoListAction();
  }, []);

  return (
    <SafeAreaView>
      <LoadingContainer />
      <InputBarContainer />
      <FilterBarContainer />
      <TodoListContainer navigation={navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;
