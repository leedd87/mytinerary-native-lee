import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CommentsScreen = ({ route }) => {
	let ScreenHeight = Dimensions.get("window").height;
	const { id } = route.params;
	console.log(id);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(id));
	}, []);

	const itinerary = useSelector((store) => store.itinerariesReducer.itinerary);
	console.log(itinerary.comments);
	return (
		<View>
			<FlatList
				style={{ height: ScreenHeight, backgroundColor: "#30475E" }}
				data={itinerary.comments && itinerary.comments}
				showsVerticalScrollIndicator={false}
				renderItem={({ item, index }) => {
					return (
						<View
							key={index}
							// style={stylesCommentsScreen.citiesContainer}
						>
							<View style={stylesCard.container}>
								<Image
									source={{
										uri: item.userId.userPhoto,
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
									{item.comment}
								</Text>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default CommentsScreen;

const stylesCommentsScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#30475E",
		width: "100%",
	},
});

//CITIES CARD STYLES
const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		borderColor: "#F05454",
		borderWidth: 5,
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
