import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItinerariesCard = ({ itineraries, navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: itineraries.image,
				}}
				style={{ height: 200 }}
			/>
			<Text style={styles.text}>{itineraries.name}</Text>
		</View>
	);
};

export default ItinerariesCard;

const styles = StyleSheet.create({
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
