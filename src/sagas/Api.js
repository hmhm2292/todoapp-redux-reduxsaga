const API = 'http://34.66.158.83:8000/todo';

const fetchTodoList = async () => {
  const response = await fetch(API, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const fetchedTodoList =
    (await response.status) === 200 ? response.json(fetchedTodoList) : [];
  return fetchedTodoList;
};

const addTodo = async action => {
  const response = await fetch(`${API}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.newTodo,
    }),
  });
  const addedTodo =
    (await response.status) === 201 ? response.json(addedTodo) : {};
  return addedTodo;
};

const deleteTodo = async action => {
  const response = await fetch(`${API}/${action.itemId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (await response.status) === 204;
};

const toggleTodo = async action => {
  // console.log('my updated', action.toggledTodo);
  const response = await fetch(`${API}/${action.itemId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.toggledTodo,
    }),
  });
  const toggledTodoDetail =
    (await response.status) === 200 ? response.json(toggledTodoDetail) : {};
  return toggledTodoDetail;
};

const updateTodo = async action => {
  console.log('my updated', action.updatedTodo);
  const response = await fetch(`${API}/${action.itemId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: action.updatedTodo,
    }),
  });
  const updatedTodoDetail =
    (await response.status) === 200 ? response.json(updatedTodoDetail) : {};
  return updatedTodoDetail;
};

export const Api = {fetchTodoList, addTodo, deleteTodo, toggleTodo, updateTodo};
