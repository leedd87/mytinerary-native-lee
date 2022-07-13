import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CitiesCards = ({ city }) => {
	//SIN URI NO TRAE IMAGENES
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: city.image,
				}}
				style={{ width: 200, height: 200 }}
			/>
			<Text>{city.name}</Text>
		</View>
	);
};

export default CitiesCards;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
		justifyContent: "center",
	},
});
