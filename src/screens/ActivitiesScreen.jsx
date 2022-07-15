import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivitiesScreen = ({ route }) => {
	const { id } = route.params;
	console.log(id);
	return (
		<View>
			<Text>ActivitiesScreen</Text>
		</View>
	);
};

export default ActivitiesScreen;

const styles = StyleSheet.create({});
