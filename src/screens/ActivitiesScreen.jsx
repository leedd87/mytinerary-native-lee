import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import React from "react";
import activitiesActions from "../../redux/actions/activitiesActions";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ActivitiesScreen = ({ route }) => {
	const { id } = route.params;
	console.log(id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(activitiesActions.findActivityFromItinerary(id));
	}, []);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(id));
	}, []);

	const activities = useSelector(
		(store) => store.activitiesReducer.activities
	);
	console.log(activities);

	const itinerary = useSelector((store) => store.itinerariesReducer.itinerary); //pasarle el reducer de itinieraries

	// console.log(itinerary);

	return (
		<View style={{ flex: 1, backgroundColor: "#30475E" }}>
			{/* <Text>{activities[0].itinerary.itineraryName}</Text> */}

			{activities.length > 0 ? (
				<FlatList
					data={activities && activities}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index }) => {
						return (
							<View
								key={index}
								style={stylesCommentsScreen.citiesContainer}
							>
								<View style={stylesCard.container}>
									<Image
										source={{
											uri: item.image,
										}}
										// style={{ height: 65, width: 65, borderRadius: 50 }}
										style={stylesCard.image}
									/>
									<Text
										style={stylesCard.text}
										onPress={() =>
											navigation.navigate("Itineraries", {
												id: item._id,
											})
										}
									>
										{item.name}
									</Text>
								</View>
							</View>
						);
					}}
				/>
			) : (
				<View style={stylesNotFound.container}>
					<View style={stylesNotFound.textContainer}>
						<Text style={stylesNotFound.text}>NO ACTIVITIES YET</Text>
					</View>
				</View>
			)}
		</View>
	);
};

export default ActivitiesScreen;

const stylesCommentsScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor:"#30475E"
		width: "100%",
	},
});

//CITIES CARD STYLES
const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		borderColor: "#F05454",
		borderWidth: 10,
		borderRadius: "10%",
		marginBottom: 20,
		width: "100%",
		marginTop: 15,
		backgroundColor: "#f5f5f5",
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		fontSize: 16,
		width: "83%",
		// fontFamily: Poppins_500Medium,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 50,
		margin: 5,
	},
});

const stylesNotFound = StyleSheet.create({
	container: {
		backgroundColor: "#30475E",
		height: "100%",
		borderBottomStartRadius: 35,
		borderBottomEndRadius: 35,
	},
	textContainer: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
		borderRadius: 34,
		borderWidth: 5,
	},
	text: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
	},
});
