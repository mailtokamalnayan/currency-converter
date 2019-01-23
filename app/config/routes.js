import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        }
     },
     CurrencyList: {
         screen: CurrencyList,
         navigationOptions: ({navigation}) => ({
             headerTitle: navigation.state.params.title,

         })
     }, 
}, {
    mode: 'modal'
});

export default createAppContainer(AppNavigator);