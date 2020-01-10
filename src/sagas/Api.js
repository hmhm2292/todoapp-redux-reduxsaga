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

export const Api = {fetchTodoList};
