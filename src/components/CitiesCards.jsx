import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CitiesCards = ({ city, navigation }) => {
	console.log(city);
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: city.image,
				}}
				style={{ height: 200 }}
			/>
			<Text
				style={styles.text}
				onPress={() => navigation.navigate("Itineraries", { id: city._id })}
			>
				{city.name}
			</Text>
		</View>
	);
};

export default CitiesCards;

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
