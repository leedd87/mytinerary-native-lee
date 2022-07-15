import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ItinerariesCard = ({ itineraries, navigation }) => {
	console.log(itineraries._id);
	return (
		<View style={stylesCardItinerary.container}>
			<TouchableOpacity
				style={styleAction.buttonTravel}
				onPress={() =>
					navigation.navigate("Activities", { id: itineraries._id })
				}
			>
				<Image
					source={{
						uri: itineraries.image,
					}}
					style={{ height: 65, width: 65, borderRadius: 50 }}
				/>
				<Text style={stylesCardItinerary.text}>{itineraries.name}</Text>
				<Text style={stylesCardItinerary.text}>
					Price: {itineraries.price}
				</Text>
				<Text style={stylesCardItinerary.text}>
					Likes: {itineraries.likes.length}
				</Text>
				{/* <Text style={stylesCardItinerary.text}>{itineraries.hashtags}</Text> esto hay que mapearlo */}
				<Text style={stylesCardItinerary.text}>
					duration: {itineraries.duration}
				</Text>
				{/* <Text style={stylesCardItinerary.text}>{itineraries.comments}</Text> esto hay que mapearlo */}
				<Text style={stylesCardItinerary.text}>
					Itinerary: {itineraries.itineraryName}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ItinerariesCard;

const stylesCardItinerary = StyleSheet.create({
	container: {
		flex: 1,
		borderColor: "#F05454",
		borderWidth: 10,
		borderRadius: "10%",
		marginBottom: 20,
		width: 280,
		marginTop: 15,

		// backgroundColor: "#F05454",
		// padding: 10,
		// justifyContent: "center",
	},
	text: {
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		fontSize: 20,
		// fontFamily: Poppins_500Medium,
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
