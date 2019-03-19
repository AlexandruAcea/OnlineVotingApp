import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
