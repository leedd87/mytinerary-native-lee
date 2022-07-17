import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";
import citiesActions from "../redux/actions/citiesActions";
import usersActions from "../redux/actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Stack Screens

import CitiesStackScreen from "./stackScreens/CitiesStackScreen";
import HomeStackScreen from "./stackScreens/HomeStackScreen";
import LogInStackScreen from "./stackScreens/LogInStackScreen";

// //Screen names

const logInName = "MyAccount";
const itinerariesName = "Itineraries";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getData();
		//eslint-disable-next-line
	}, []);

	const getData = async () => {
		try {
			const token = await AsyncStorage.getItem("token");
			if (token !== null) {
				dispatch(usersActions.verifyToken(token));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const user = useSelector((store) => store.usersReducer.user);
	console.log(user);

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
						} else if (routeName === logInName) {
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
					name={logInName}
					// options={{ headerShown: false }}
					component={LogInStackScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;
