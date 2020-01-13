# TodoApp

This TodoApp was created using React Native.

## Tech Stack

React Native/Javascript/styled-components/React Navigation/Redux/Redux Saga

## Installation

1. Fork the project to yours.

2. Git clone your forked repository.

   ```
   https://github.com/<your-id>/todoapp-redux-reduxsaga.git
   ```

3. Install your packages.

   ```
   yarn or npm install
   ```

- Note that I recommend using yarn .
- Also note that `yarn.lock` and `package-lock.json` sometimes make collision. Try to delete one of them.

4. Run pod install (if running on iOS)

- `cd ios && pod install`

5. Run your project

1. **Run metro bundler**

   - Xcode or Android studio should be installed.

   ```
   yarn ios or yarn android
   ```

   or

   ```
   npx react-native run-ios or npx react-native-android
   ```

## Details

#### Features

User is able to crete a new todo, delete the todo, toggle the todo, and when the user clicks on the todo, it will take the user to the todo detail page where the user is able to edit the todo.

## Screen Shots

App Video Link: https://www.notion.so/Hyung-Mok-Kim-s-Story-1b59d61ba4be44418dc719a226bc29b6

![](https://github.com/hmhm2292/todoapp-redux-reduxsaga/blob/master/AppImage/Screen%20Shot%202020-01-12%20at%204.14.30%20PM.png)

![](https://github.com/hmhm2292/todoapp-redux-reduxsaga/blob/master/AppImage/Screen%20Shot%202020-01-12%20at%204.14.51%20PM.png)

## Project Explanation

### File Structure

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
export const  fetchTodoListAction  =  ()  =>  ({
type:  types.FETCH_TODO_LIST,
});
```

actions / index.js 파일에서 모든 액션 생성자가있는 곳 입니다.

위의 예는 TodoList 를 가져오는 액션 생성자를 보여줍니다.

**/components**
기능단위의 컴포넌트를 모아놓은 폴더 입니다.

**/containers**
Redux 관련 로직들은 여기에 있습니다.
react-redux의 mapStateToProps , mapDispatchToProps 를 connect function 을 사용하여 컴포넌트를 Redux에 연결합니다.

**/navigation**
앱의 모든 navigation 기능들이 포함되어 있습니다.

**/reducers**
reducers / index.js 파일에는 모든 reducers 가 combine되어 있습니다.

```
const  rootReducer  =  combineReducers({
	todoItem: todoItem,
});
```

reducers / todoItem.js 파일에서 action을 감지하여 dispatch되면 실행할 reducer가 있습니다.

```
const  todoItem  =  (state  =  INITIAL_STATE,  action)  =>  {
	switch  (action.type)  {
		case  types.FETCH_TODO_LIST:
			return {...state, loading:  true};
		case  types.FETCH_TODO_SUCCESS:
			return {
				...state,
				todoList:  action.fetchedTodoList,
				loading:  false,
			}
		case  types.FETCH_TODO_FAILED:
			return action.error;
		}
	}
};
```

"FETCH_TODO_LIST" action이 전달되면 loading state가 true가되고 로딩바가 화면에 보입니다.

"FETCH_TODO_SUCCESS"action이 전달되면 loading state가 false로 변경되고 state 는 fetched 된 todolist data 로 업데이트됩니다.

**/sagas**

Store 에 있는 state 를 변경하는 action dispatcher와 API 호출를 하는 모든 로직들이 포함되어있습니다.

sagas/rootSaga.js는 모든 actionWatchers를 모아놓은 곳입니다.

```
export  default  function*  rootSaga() {
	yield  all([fork(watchFetchTodo)]);
}
```

saga / todosSagas.js에서 모든 actionWatchers를 export 합니다.

```
export  function*  watchFetchTodo() {
	yield  takeLatest(types.FETCH_TODO_LIST,  fetchTodo);
}

function*  fetchTodo() {
	try {
		const  fetchedTodoList  = yield Api.fetchTodoList();
		yield  put({
			type: types.FETCH_TODO_SUCCESS,
			fetchedTodoList: fetchedTodoList,
		});
	} catch (error) {
		yield  put({type: types.FETCH_TODO_FAILED, error: error});
		}
	}
```

위의 코드는 SAGA에게 FETCH_TODO_LIST action이 실행되는지 지켜보다가 실행될때 fetchTodo 함수를 호출하도록 지시합니다. fetchTodo 함수 내부에서 API에 대한 비동기 호출이 발생하고 요청이 도착하면 다음 action "FETCH_TODO_SUCCESSFUL"이 전달됩니다. "FETCH_TODO_SUCCESSFUL" 은 fetchTodo 함수 내에서 dispatch 되기 때문에 action / index.js 파일에 작성되지 않은 것을 볼 수 있습니다.

sagas / Api.js 파일에서 모든 Api fetch 함수가 배치됩니다.

```
function*  fetchTodoList() {
	const  response  = yield fetch(API,  {
		headers:  {
		'Content-Type':  'application/json',
		},
	});
	const  fetchedTodoList  = yield response.status  ===  200
	?  response.json(fetchedTodoList)
	: [];
	return  fetchedTodoList;
}
```

**/screens**

앱의 모든 화면 컴포넌트 들이 포함 된 폴더입니다.

**/store**

index.js 파일에서 redux store를 초기화했습니다. 이 store는 미들웨어 SAGA를 사용합니다.

### 왜 이렇게 구현을 했는지?

앱의 확장성과 유지보수의 편의를 고려하여 좀 더 기능을 세분화하여 나누었습니다. 예로 컴포넌트들은 기능별로 나누었고, 현재 reducer가 1개 뿐이지만 나중에 추가될 가능성을 고려하여 action의정의 , action 생성자, containers , reducer , Todo 기능을 위한 Saga를 따로 관리하였습니다.
