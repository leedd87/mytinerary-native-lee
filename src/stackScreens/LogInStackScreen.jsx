import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CommentsScreen from "../screens/CommentsScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const LogInStack = createNativeStackNavigator();
const LogInStackScreen = () => {
	return (
		<LogInStack.Navigator>
			<LogInStack.Screen name="LogIn" component={LogInScreen} />
			<LogInStack.Screen name="SignUp" component={SignUpScreen} />
			<LogInStack.Screen name="Welcome" component={CommentsScreen} />
		</LogInStack.Navigator>
	);
};

export default LogInStackScreen;
