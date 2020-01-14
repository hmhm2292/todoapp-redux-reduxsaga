import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components';

const notCompleted =
  'https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/circle-256.png';
const completed =
  'https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/check-circle-256.png';
const trash =
  'https://cdn0.iconfinder.com/data/icons/webshop/32/trash-01-256.png';

const TodoList = ({
  todoList,
  filterStatus,
  toggleTodoAction,
  deleteTodoAction,
  goToDetailAction,
  navigation,
}) => {
  console.log('filterStat', filterStatus);

  const viewCompleted = todoList
    ? todoList.filter(todo => todo.content.split('#')[0] === '0')
    : null;

  const viewNotCompleted = todoList
    ? todoList.filter(todo => todo.content.split('#')[0] === '1')
    : null;

  const handleToggleTodo = (itemId, isCompleted, todoText) => {
    toggleTodoAction(itemId, isCompleted, todoText);
  };

  const handleDeleteTodo = itemId => {
    deleteTodoAction(itemId);
  };

  const goToDetail = item => {
    goToDetailAction(item);
    navigation.navigate('TodoDetailScreen');
  };

  let todoListFiltered;
  if (filterStatus === 'View All') {
    todoListFiltered = todoList;
  } else if (filterStatus === 'View Completed') {
    todoListFiltered = viewCompleted;
  } else if (filterStatus === 'View Not Completed') {
    todoListFiltered = viewNotCompleted;
  }

  return (
    <FlatList
      bounces={false}
      keyExtractor={item => item.id.toString()}
      data={todoListFiltered}
      renderItem={({item}) => {
        const todoSplitWithSharp = item.content.split('#');
        let isCompleted;
        let todoText;
        const itemId = item.id;
        if (todoSplitWithSharp.length > 2) {
          isCompleted = todoSplitWithSharp[0];
          todoText = todoSplitWithSharp.splice(1).join('#');
        } else if (todoSplitWithSharp.length === 2) {
          isCompleted = todoSplitWithSharp[0];
          todoText = todoSplitWithSharp[1];
        }

        return (
          <Container>
            <ToggleTodoContainer>
              <TouchableOpacity
                onPress={() => handleToggleTodo(itemId, isCompleted, todoText)}>
                {isCompleted === '1' ? (
                  <Icon source={{uri: notCompleted}} />
                ) : (
                  <Icon source={{uri: completed}} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => goToDetail(itemId)}>
                <Todo ellipsizeMode={'tail'} numberOfLines={1}>
                  {todoText}
                </Todo>
              </TouchableOpacity>
            </ToggleTodoContainer>
            <TouchableOpacity onPress={() => handleDeleteTodo(itemId)}>
              <Icon marginValue={'1px'} source={{uri: trash}} />
            </TouchableOpacity>
          </Container>
        );
      }}
    />
  );
};

export default TodoList;

const Container = styled.View`
  border: 1px solid #e2e2e2;
  margin: 5px;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ToggleTodoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;
const Todo = styled.Text`
  font-size: 14px;
  margin: 15px 0px;
  width: 295px;
`;

const Icon = styled.Image`
  width: 23px;
  height: 23px;
  margin-right: ${props => props.marginValue || '10px'};
`;
