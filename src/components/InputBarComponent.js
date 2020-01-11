import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

class InputBar extends Component {
  constructor() {
    super();
    this.state = {newTodo: ''};
  }

  handleChangeText = newTodo => {
    this.setState({newTodo});
  };

  actionAddTodo = () => {
    this.props.addTodoAction(this.state.newTodo);
    this.setState({newTodo: ''});
  };

  render() {
    return (
      <Container>
        <InputBox
          onChangeText={this.handleChangeText}
          value={this.state.newTodo}
          placeholder="Enter Todo"
        />
        <TouchableOpacity
          onPress={this.state.newTodo ? this.actionAddTodo : null}>
          <AddButton
            source={{uri: 'https://img.icons8.com/doodle/48/000000/add.png'}}
          />
        </TouchableOpacity>
      </Container>
    );
  }
}

export default InputBar;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const InputBox = styled.TextInput`
  border: 1px solid black;
  border-radius: 2px;
  height: 50;
  padding: 5px;
  flex: 1;
`;

const AddButton = styled.Image`
  height: 30;
  width: 30;
  margin: 0px 10px;
  justify-content: center;
  align-items: center;
`;
