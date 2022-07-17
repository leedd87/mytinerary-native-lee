import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import PopularText from "../components/PopularText";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usersActions from "../../redux/actions/usersActions";
import citiesActions from "../../redux/actions/citiesActions";

export default function HomeScreen({ navigation }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(citiesActions.getCities());
		//eslint-disable-next-line
	}, []);
	return (
		<ScrollView>
			<Hero />
			<View style={styleAction.container}>
				<Text style={styleAction.actionText}>Discover Korea with Us</Text>
				<TouchableOpacity
					style={styleAction.buttonTravel}
					onPress={() => {
						navigation.navigate("MyCities");
						alert("Welcome to Cities🤩");
					}}
				>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Travel
					</Text>
				</TouchableOpacity>
			</View>
			<PopularText />
			<Carousel />
			<StatusBar style="auto" />
		</ScrollView>
	);
}

const styleAction = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F05454",
		// justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	actionText: {
		fontSize: 20,
		color: "#f5f5f5",
		padding: 5,
	},
	buttonTravel: {
		// backgroundColor: "#f5f5f5",
		padding: 10,
		borderRadius: 5,
		borderColor: "#f5f5f5",
		borderWidth: 2,
	},
});
