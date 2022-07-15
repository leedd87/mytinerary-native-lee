import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";
import citiesActions from "../redux/actions/citiesActions";
import { useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Stack Screens

import CitiesStackScreen from "./stackScreens/CitiesStackScreen";
import HomeStackScreen from "./stackScreens/HomeStackScreen";
import SignUpScreen from "./screens/SignUpScreen";

// //Screen names

const formName = "SignUp";
const itinerariesName = "Itineraries";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(citiesActions.getCities());
		//eslint-disable-next-line
	}, []);

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={"MyTinerary"}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let routeName = route.name;

						if (routeName === "MyTinerary") {
							iconName = focused ? "home" : "home-outline";
						} else if (routeName === "MyCities") {
							iconName = focused ? "earth" : "earth-outline";
						} else if (routeName === formName) {
							iconName = focused ? "person" : "person-outline";
						} else if (routeName === itinerariesName) {
							iconName = focused ? "reader" : "reader-outline";
						}

						return (
							<Ionicons name={iconName} size={25} color={"#30475E"} />
						);
					},
					tabBarActiveTintColor: "#F05454",
					tabBarInactiveTintColor: "#F05454",
				})}
			>
				<Tab.Screen
					name={"MyTinerary"}
					options={{ headerShown: false }}
					component={HomeStackScreen}
				/>
				<Tab.Screen
					name={"MyCities"}
					component={CitiesStackScreen}
					options={{ headerShown: false }}

					// options={{ tab }}
				/>
				{/* <Tab.Screen name={itinerariesName} component={ItinerariesScreen} /> */}
				<Tab.Screen
					name={formName}
					// options={{ headerShown: false }}
					component={SignUpScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;
