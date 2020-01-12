import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import TodoApp from './src/TodoApp';

/**
 * Store - holds our state = There IS ONLY ONE STORE
 * Action(TYPE of ACTION) = State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - only mandatory argument is the action type
 * Subscriber - listens for state change to update the UI (using connect)
 */

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
