import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const TodoDetailScreen = ({
  deleteTodoAction,
  toggleTodoAction,
  todoDetail,
  navigation,
  updateTodoAction,
}) => {
  const todoSplitWithSharp = todoDetail.content.split('#');

  let isCompleted;
  let todoText;

  if (todoSplitWithSharp.length > 2) {
    isCompleted = todoSplitWithSharp[0];
    todoText = todoSplitWithSharp.splice(1).join('#');
  } else if (todoSplitWithSharp.length === 2) {
    isCompleted = todoSplitWithSharp[0];
    todoText = todoSplitWithSharp[1];
  }

  const [updatedTodo, setUpdatedTodo] = useState(todoText);
  // console.log('useSate', updatedTodo);

  const handleChangeText = updatedTodo => {
    setUpdatedTodo(updatedTodo);
  };

  const handleToggleTodo = () => {
    toggleTodoAction(todoDetail.id, isCompleted, updatedTodo);
  };

  const handleDeleteTodo = () => {
    deleteTodoAction(todoDetail.id);
    navigation.goBack();
  };

  const updateTodo = () => {
    updateTodoAction(todoDetail.id, isCompleted, updatedTodo);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Container bounces={false}>
        <MyTodoContainer>
          <MyTodo multiline={true} onChangeText={handleChangeText}>
            {updatedTodo}
          </MyTodo>
        </MyTodoContainer>
        <Options>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#00ffef', '#60d4cd', '#35b2ff']}
            style={{borderRadius: 10}}>
            <ButtonContainer onPress={handleToggleTodo}>
              {isCompleted === '1' ? (
                <Button>Change to Completed</Button>
              ) : (
                <Button>Change to Not Completed</Button>
              )}
            </ButtonContainer>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#00ffef', '#60d4cd', '#35b2ff']}
            style={{borderRadius: 10}}>
            <ButtonContainer onPress={() => handleDeleteTodo(todoDetail.id)}>
              <Button>Delete</Button>
            </ButtonContainer>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#00ffef', '#60d4cd', '#35b2ff']}
            style={{borderRadius: 10}}>
            <ButtonContainer onPress={updatedTodo ? updateTodo : null}>
              <Button>Update</Button>
            </ButtonContainer>
          </LinearGradient>
        </Options>
      </Container>
    </SafeAreaView>
  );
};

export default TodoDetailScreen;

const Container = styled.ScrollView``;

const MyTodoContainer = styled.View`
  padding: 10px;
  width: 100%;
  overflow: scroll;
`;

const MyTodo = styled.TextInput`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  min-height: 300px;
  padding: 10px;
`;

const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 110px;
`;
const Button = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
