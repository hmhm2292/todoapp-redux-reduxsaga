# TodoApp

This TodoApp was created using React Native.

## Tech Stack

React Native/Javascript/styled-components/React Navigation/Redux/Redux Saga

## Installation

1. Git clone the repository.

   ```
   git clone https://github.com/hmhm2292/todoapp-redux-reduxsaga.git
   ```

2. Install your packages.

   ```
   yarn or npm install
   ```

- Note that I recommend using yarn .
- Also note that `yarn.lock` and `package-lock.json` sometimes make collision. Try to delete one of them.

3. Run pod install (if running on iOS)

- `cd ios && pod install`

4. Run your project

5. **Run metro bundler**

   - Xcode or Android studio should be installed.

   ```
   yarn ios
   ```

   ```
   yarn android
   ```

   or

   ```
   npx react-native run-ios
   ```

   ```
   npx react-native-android
   ```

## Details

#### Features

- create a new todo
- delete the todo
- toggle the todo
- when the user clicks on the todo, it will take the user to the todo detail page where the user is able to edit the todo.

## Screen Shots

App Video Link: https://www.notion.so/Hyung-Mok-Kim-s-Story-1b59d61ba4be44418dc719a226bc29b6

![](https://github.com/hmhm2292/todoapp-redux-reduxsaga/blob/master/AppImage/Screen%20Shot%202020-01-14%20at%207.05.52%20PM.jpg)

![](https://github.com/hmhm2292/todoapp-redux-reduxsaga/blob/master/AppImage/Screen%20Shot%202020-01-13%20at%208.11.56%20PM.jpg)

## Project Explanation

### File Structure

To read a version translated in Korean click here
https://github.com/hmhm2292/todoapp-redux-reduxsaga/blob/master/README_KO.md

```
+-- /src
|   +-- /actions
|   |   +-- actionTypes.js
|   |   +-- index.js
|   +-- /components
|   |   +-- InputBarComponent.js
|   |   +-- LoadingComponent.js
|   |   +-- TodoDetailComponent.js
|   |   +-- TodoListComponent.js
|   +-- /containers
|   |   +-- InputBarContainer.js
|   |   +-- LoadingContainer.js
|   |   +-- MainScreenContainer.js
|   |   +-- TodoDetailContainer.js
|   |   +-- TodoListContainer.js
|   +-- /navigation
|   |   +-- AppNavigator.js
|   +-- /reducers
|   |   +-- index.js
|   |   +-- todoItems.js
|   +-- /sagas
|   |   +-- Api.js
|   |   +-- rootSaga.js
|   |   +-- todoSaga.js
|   +-- screens
|   |   +-- MainScreen.js
|   |   +-- TodoDetailScreen.js
|   +-- store
|   |   +-- index.js
|   +-- TodoApp.js
+-- App.js
```

**/actions**

Ex:

```
export const fetchTodoListAction = () =>({
  type: types.FETCH_TODO_LIST,
});
```

In the actions/index.js file, is where all the action creators are, where it lets the reducer know how to deal with the type of actions the user initiates.

The above example shows an action creator to fetch the todo list.

**/components**
Contains components that is divided by features and their related styles.

**/containers**
Redux-related logic is placed here. Connects the components to Redux using the connect function from react-redux.

**/navigation**
All the navigation features are placed in the navigation folder.

**/reducers**
In the reducers/index.js file is where all the reducers are combined.

```
const rootReducer = combineReducers({
  todoItem: todoItem,
});
```

In the reducers/todoItem.js file is where the reducer is placed to determine the changes to an application's state (In this the state is the todoItem).

```
const todoItem = (state = INITIAL_STATE, action)  =>  {
	switch (action.type) {
		case types.FETCH_TODO_LIST:
			return {...state, loading: true};
		case types.FETCH_TODO_SUCCESS:
			return {
				...state,
				todoList: action.fetchedTodoList,
				loading: false,
			}
		case types.FETCH_TODO_FAILED:
			return action.error;
	}
}

```

Here, when the action "FETCH_TODO_LIST" gets dispatched, the state of loading becomes true and the loading component appears.

Once the action "FETCH_TODO_SUCCESS" gets dispatched, the state of the loading changes to false, and the state gets updated with the fetched todo list.

**/sagas**

Contains all the logic for fetching API and dispatching actions to change the current state in the store.

In the sagas/rootSaga.js is where all the actionWatchers are imported placed.

```
export default function* rootSaga() {
	yield all([fork(watchFetchTodo)]);
}
```

saga/todosSagas.js is where all the actionWatchers are exported.

```
export function* watchFetchTodo() {
	yield takeLatest(types.FETCH_TODO_LIST, fetchTodo);
}

function* fetchTodo() {
	try {
		const fetchedTodoList = yield Api.fetchTodoList();
		yield put({
			type: types.FETCH_TODO_SUCCESS,
			fetchedTodoList: fetchedTodoList,
		});
	} catch (error) {
		yield put({type: types.FETCH_TODO_FAILED, error: error});
		}
	}
```

The code above tells SAGA to wait for the action FETCH_TODO_LIST and calls the fetchTodo function.
Inside of the fetchTodo function happens an asynchronous call to API and when the request has arrived the next action “FETCH_TODO_SUCCESSFUL" is dispatched. You will see that the action “FETCH_TODO_SUCCESSFUL” is not written in the actions/index.js file because it’s fully described here.

In the sagas/Api.js file is where all the Api fetch functions are placed.

```
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
```

**/screens**

Folder for all the screens in the app.

**/store**

In this file I’ve initialized redux store . This store uses the SAGA middleware.

### Why was folder tree constructed this way?

The app's folder tree was construted this way with the consideration of the app's scalability and ease of maintenance. For example, the components are broken down by features so that whenever there is a bug in a feature, it is easier to locate and manage the bug. Also there is only one reducer at the moment, and one Saga file for that reducer, however each reducer, saga, action creators are all independently created with the consideration of new reducers, saga, and action creators to be possibility added later.
