import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PopularText = () => {
	return (
		<View style={styles.contain}>
			<Text style={styles.text}>Popular MyTineraries</Text>
		</View>
	);
};

export default PopularText;

const styles = StyleSheet.create({
	contain: {
		flex: 1,
		backgroundColor: "#30475E",
		padding: 10,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
		borderColor: "#f5f5f5",
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		color: "#f5f5f5",
	},
});
