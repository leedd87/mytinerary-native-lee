import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ItinerariesScreen from "../screens/ItinerariesScreen";
import CitiesScreen from "../screens/CitiesScreen";
import CitiesCards from "../components/CitiesCards";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import LogInScreen from "../screens/LogInScreen";

const CitiesStack = createNativeStackNavigator();
const CitiesStackScreen = () => {
	return (
		<CitiesStack.Navigator>
			<CitiesStack.Screen
				name="Cities" //+citiesCard => onPress => renderiza Itinerarios por consiguiente no es necesario llamar a citiesCards
				component={CitiesScreen}
				// options={{ headerShown: false }}
			/>
			{/* <CitiesStack.Screen name="Card" component={CitiesCards} /> */}
			<CitiesStack.Screen name="Itineraries" component={ItinerariesScreen} />
			<CitiesStack.Screen name="Activities" component={ActivitiesScreen} />
			<CitiesStack.Screen name="Comments" component={CommentsScreen} />
			<CitiesStack.Screen name="LogIn" component={LogInScreen} />
		</CitiesStack.Navigator>
	);
};

export default CitiesStackScreen;

// const styles = StyleSheet.create({});
