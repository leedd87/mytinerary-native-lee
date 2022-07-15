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
	TouchableOpacity,
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

const ItinerariesScreen = ({ navigation, route }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const { id } = route.params;
	console.log(id);

	useEffect(() => {
		dispatch(itinerariesActions.findItineraryFromCity(id));
	}, []);

	// const cities = useSelector((store) => store.citiesReducer.cities);
	const itineraries = useSelector(
		(store) => store.itinerariesReducer.itineraries
	);
	console.log(itineraries);

	return (
		<SafeAreaView>
			<View style={{ backgroundColor: "#30475E", height: height }}>
				{itineraries ? (
					<FlatList
						data={itineraries && itineraries}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) => {
							return (
								<View
									key={index}
									style={stylesCitiesScreen.citiesContainer}
								>
									{/* ITINERARIES--START */}
									<View style={stylesCardItinerary.container}>
										<TouchableOpacity
											style={styleAction.buttonTravel}
											onPress={() =>
												navigation.navigate("Activities", {
													id: item._id,
												})
											}
										>
											<Image
												source={{
													uri: item.image,
												}}
												style={{
													height: 65,
													width: 65,
													borderRadius: 50,
												}}
											/>
											<Text style={stylesCardItinerary.text}>
												{item.name}
											</Text>
											<Text style={stylesCardItinerary.text}>
												Price: {item.price}
											</Text>
											<Text style={stylesCardItinerary.text}>
												Likes: {item.likes.length}
											</Text>
											{/* <Text style={stylesCardItinerary.text}>{itineraries.hashtags}</Text> esto hay que mapearlo */}
											<Text style={stylesCardItinerary.text}>
												duration: {item.duration}
											</Text>
											{/* <Text style={stylesCardItinerary.text}>{itineraries.comments}</Text> esto hay que mapearlo */}
											<Text style={stylesCardItinerary.text}>
												Itinerary: {item.itineraryName}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() =>
												navigation.navigate("Comments", {
													id: item._id,
												})
											}
										>
											<Text>SHOW COMMENTS</Text>
										</TouchableOpacity>
									</View>
									{/* <View style={stylesCardItinerary.container}>
										<Image
											source={{
												uri: item.image,
											}}
											style={{ height: 200 }}
										/>
										<Text style={stylesCardItinerary.text}>
											{item.name}
										</Text>
									</View> */}
									{/* <ItinerariesCard itineraries={item} /> */}
									{/* ITINERARIES-END */}
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

const stylesCardItinerary = StyleSheet.create({
	container: {
		flex: 1,
		borderColor: "#F05454",
		borderWidth: 10,
		borderRadius: "10%",
		marginBottom: 20,
		width: 280,
		marginTop: 15,
	},
	text: {
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		fontSize: 20,
	},
});

const styleAction = StyleSheet.create({
	buttonTravel: {
		// backgroundColor: "#f5f5f5",
		padding: 10,
		borderRadius: 5,
		borderColor: "#f5f5f5",
		borderWidth: 2,
	},
});
