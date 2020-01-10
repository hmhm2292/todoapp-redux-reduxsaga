// import {connect} from 'react-redux';

const API = 'http://34.66.158.83:8000/todo';

function* fetchTodoList() {
  const response = yield fetch(API, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const fetchedTodoList = yield response.status === 200
    ? response.json(fetchedTodoList)
    : [];
  return fetchedTodoList;
}

function* addTodo(action) {
  console.log('my action', action.newTodo);
  const response = yield fetch(`${API}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.newTodo,
    }),
  });
  yield console.log('aa', typeof response.status);
  return yield response.status === 201;
}

function* deleteTodo(action) {
  console.log(action.itemId);
  const response = yield fetch(`${API}/${action.itemId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  yield console.log('delete', response.status);
  return yield response.status === 204;
}

function* updateTodo(action) {
  console.log('my updated', action.updatedTodo);
  const response = yield fetch(`${API}/${action.itemId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.updatedTodo,
    }),
  });
  yield console.log('aa', typeof response.status);
  return yield response.status === 200;
}

export const Api = {fetchTodoList, addTodo, deleteTodo, updateTodo};
