import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreenContainer from '../containers/MainScreenContainer';
import TodoDetailContainer from '../containers/TodoDetailContainer';

const RootStack = createStackNavigator({
  MainScreen: {
    screen: MainScreenContainer,
    navigationOptions: {
      title: null,
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },

  TodoDetailScreen: {
    screen: TodoDetailContainer,
    navigationOptions: {
      title: 'My Todo',
      cardStyle: {backgroundColor: 'white'},
    },
  },
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
