import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreenContainer from '../containers/MainScreenContainer';
import TodoDetailScreenContainer from '../containers/TodoDetailScreenContainer';

const RootStack = createStackNavigator({
  MainScreen: {
    screen: MainScreenContainer,
    navigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },

  TodoDetailScreen: {
    screen: TodoDetailScreenContainer,
    navigationOptions: {
      title: 'My Todo',
      cardStyle: {backgroundColor: 'white'},
    },
  },
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
