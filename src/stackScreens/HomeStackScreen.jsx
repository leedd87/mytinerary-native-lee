import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

import CitiesScreen from "../screens/CitiesScreen";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Cities" component={CitiesScreen} />
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;

// const styles = StyleSheet.create({});
