import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Academic from './pages/Academic';
import Grade from './pages/Grade';

const App = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <App.Navigator headerMode="none">
                <App.Screen name="Login" component={Login} />
                <App.Screen name="Menu" component={Menu} />
                <App.Screen name="Academic" component={Academic} />
                <App.Screen name="Grade" component={Grade} />
            </App.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

