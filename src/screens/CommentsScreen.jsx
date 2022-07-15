import { StyleSheet, Text, View } from "react-native";
import React from "react";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const CommentsScreen = ({ route }) => {
	const { id } = route.params;
	console.log(id);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(id));
	}, []);

	const itinerary = useSelector((store) => store.itinerariesReducer.itinerary);
	return (
		<View>
			<Text>CommentsScreen</Text>
		</View>
	);
};

export default CommentsScreen;

const styles = StyleSheet.create({});
