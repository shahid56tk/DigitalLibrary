import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/loginPage/login";
import BookList from "../screens/bookList";
import CreateAccount from "../screens/createAccount";
import BookReader from "../screens/bookReader";
import CreateBook from "../screens/createBook/createBook";
import Splash from "../screens/splash";

const Stack = createNativeStackNavigator()

export default function Navigation(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splash">
            <Stack.Screen
                    name="splash"
                    component={Splash}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                />
                <Stack.Screen
                    name="createAccount"
                    component={CreateAccount}
                    options={{headerShown:true}}
                />
                <Stack.Screen
                    name="mainPage"
                    component={BookList}
                />
                <Stack.Screen
                    name="pdfBook"
                    component={BookReader}
                />
                <Stack.Screen
                    name="createBook"
                    component={CreateBook}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}