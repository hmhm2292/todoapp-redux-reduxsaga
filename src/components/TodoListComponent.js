import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components';

const notCompleted =
  'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-blank-512.png';
const completed =
  'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-512.png';
const trash =
  'https://cdn2.iconfinder.com/data/icons/outline-icons-1/72/trashcan-512.png';

const TodoList = ({todoList, toggleTodoAction, deleteTodoAction}) => {
  // console.log(todoList);

  const handleToggleTodo = (itemId, isCompleted, todoText) => {
    toggleTodoAction(itemId, isCompleted, todoText);
  };

  const handleDeleteTodo = itemId => {
    deleteTodoAction(itemId);
  };

  console.log('rdner');
  return (
    <FlatList
      bounces={false}
      keyExtractor={item => item.id.toString()}
      data={todoList}
      renderItem={({item}) => {
        const isCompleted = item.content.split('#')[0];
        const todoText = item.content.split('#')[1];
        const itemId = item.id;

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
              <TouchableOpacity>
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
  border: 1px solid #efefef;
  margin: 5px;
  border-radius: 2px;
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
  width: 25px;
  height: 25px;
  margin-right: ${props => props.marginValue || '10px'};
`;
