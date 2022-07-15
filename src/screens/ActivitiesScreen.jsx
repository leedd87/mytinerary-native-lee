import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import activitiesActions from "../../redux/actions/activitiesActions";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

	const itinerary = useSelector((store) => store.itinerariesReducer.itinerary); //pasarle el reducer de itinieraries

	console.log(itinerary);

	return (
		<View>
			<TouchableOpacity>
				<Text>ActivitiesScreen</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ActivitiesScreen;

const styles = StyleSheet.create({});
