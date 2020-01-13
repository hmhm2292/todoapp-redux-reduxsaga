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
  const response = yield fetch(`${API}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.newTodo,
    }),
  });
  const addedTodo = yield response.status === 201
    ? response.json(addedTodo)
    : {};
  return addedTodo;
}

function* deleteTodo(action) {
  const response = yield fetch(`${API}/${action.itemId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return yield response.status === 204;
}

function* toggleTodo(action) {
  // console.log('my updated', action.toggledTodo);
  const response = yield fetch(`${API}/${action.itemId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.toggledTodo,
    }),
  });
  const toggledTodoDetail = yield response.status === 200
    ? response.json(toggledTodoDetail)
    : {};
  return toggledTodoDetail;
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
  const updatedTodoDetail = yield response.status === 200
    ? response.json(updatedTodoDetail)
    : {};
  return updatedTodoDetail;
}

export const Api = {fetchTodoList, addTodo, deleteTodo, toggleTodo, updateTodo};
