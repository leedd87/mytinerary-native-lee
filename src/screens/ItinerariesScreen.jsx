import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TextInput,
	FlatList,
} from "react-native";
import React from "react";
import CitiesCards from "../components/CitiesCards";
import { useEffect, useState } from "react";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import citiesActions from "../../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";
import ItinerariesCard from "../components/ItinierariesCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ItinerariesScreen = ({ route, navigation }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const { id } = route.params;
	console.log(id);

	useEffect(() => {
		dispatch(itinerariesActions.getItineraries());
	}, []);

	// const cities = useSelector((store) => store.citiesReducer.cities);
	const itineraries = useSelector(
		(store) => store.itinerariesReducer.itineraries
	);

	return (
		<SafeAreaView>
			<View style={{ backgroundColor: "#30475E", height: height }}>
				{itineraries.length > 0 ? (
					<FlatList
						data={itineraries && itineraries}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) => {
							return (
								<View
									key={index}
									style={stylesCitiesScreen.citiesContainer}
								>
									<ItinerariesCard itineraries={item} />
								</View>
							);
						}}
					/>
				) : (
					<View style={stylesNotFound.container}>
						<Text style={stylesNotFound.text}>CITIES NOT FOUND</Text>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

export default ItinerariesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#30475E",
	},
	// text: {
	// 	textAlign: "center",
	// },
});

const stylesNotFound = StyleSheet.create({
	container: {
		backgroundColor: "#30475E",
		height: "100%",
		borderRadius: 34,
	},
	text: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
	},
});

const stylesCitiesScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#30475E",
	},
});

const stylesInput = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		fontSize: 20,
	},
});
