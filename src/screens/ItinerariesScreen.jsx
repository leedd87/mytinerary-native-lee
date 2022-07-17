import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ItinerariesScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const { id } = route.params;
	console.log(id);

	useEffect(() => {
		dispatch(itinerariesActions.findItineraryFromCity(id));
	}, []);

	// const cities = useSelector((store) => store.citiesReducer.cities);
	const itineraries = useSelector(
		(store) => store.itinerariesReducer.itineraries
	);
	console.log(itineraries);
	let money = "💵 ";
	return (
		<SafeAreaView>
			<View
				style={{
					height: height,
					backgroundColor: "#30475E",
				}}
			>
				{itineraries.length > 0 ? (
					<FlatList
						data={itineraries && itineraries}
						showsVerticalScrollIndicator={false}
						// style={{}}
						renderItem={({ item, index }) => {
							return (
								<View key={index} style={stylesCardItinerary.container}>
									<View style={stylesCardItinerary.textContainer}>
										<Text style={stylesCardItinerary.text}>
											{item.itineraryName}
										</Text>
									</View>

									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-around",
											alignItems: "center",
											backgroundColor: "#f5f5f5",
										}}
									>
										<Image
											source={{
												uri: item.image,
											}}
											style={{
												height: 65,
												width: 65,
												borderRadius: 50,
											}}
										/>
										<Text style={stylesCardItinerary.text}>
											{item.name}
										</Text>
									</View>

									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-around",
											backgroundColor: "#f5f5f5",
										}}
									>
										<View>
											<Text style={stylesCardItinerary.text}>
												Price: {money.repeat(item.price)}
											</Text>
											<Text style={stylesCardItinerary.text}>
												Duration: {item.duration} hs
											</Text>
										</View>

										<View>
											<Text style={stylesCardItinerary.text}>
												❤️{item.likes.length} likes
											</Text>
											{/* <Text style={stylesCardItinerary.text}>
												🤍{item.likes.length} likes
											</Text> LIKE DISLIKE HABILITAR LUEGO*/}
										</View>
									</View>

									<View
										style={{
											flexDirection: "row",
											padding: 10,
											backgroundColor: "#f5f5f5",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Text>#{item.hashtags[0] + " "}</Text>
										<Text>#{item.hashtags[1] + " "}</Text>
										<Text>#{item.hashtags[2]}</Text>
									</View>

									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-around",
											alignItems: "center",
											backgroundColor: "#f5f5f5",
											padding: 10,
										}}
									>
										<Button
											onPress={() =>
												navigation.navigate("Comments", {
													id: item._id,
												})
											}
											title=""
											icon={{
												name: "comment",
												type: "font-awesome",
												size: 25,
												color: "white",
											}}
											iconContainerStyle={
												{
													// marginRight: 10,
												}
											}
											buttonStyle={{
												backgroundColor: "#F05454",
												borderColor: "transparent",

												borderRadius: 30,
											}}
											containerStyle={{
												width: 60,
												margin: 10,
											}}
										/>

										<Button
											onPress={() =>
												navigation.navigate("Activities", {
													id: item._id,
												})
											}
											title=""
											icon={{
												name: "compass",
												type: "font-awesome",
												size: 25,
												color: "white",
											}}
											iconContainerStyle={
												{
													// marginRight: 10,
												}
											}
											buttonStyle={{
												backgroundColor: "#F05454",
												borderColor: "transparent",
												borderRadius: 30,
											}}
											containerStyle={{
												width: 60,
												margin: 10,
											}}
										/>
									</View>
								</View>
							);
						}}
					/>
				) : (
					<View style={stylesNotFound.container}>
						<View style={stylesNotFound.textContainer}>
							<Text style={stylesNotFound.text}>NO ITINERARIES YET</Text>
						</View>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

export default ItinerariesScreen;

const stylesCardItinerary = StyleSheet.create({
	container: {
		margin: 30,
		borderColor: "#F05454",
		borderWidth: 5,
	},
	textContainer: {
		backgroundColor: "#f5f5f5",
		paddingTop: 10,
	},
	text: {
		textAlign: "center",
		fontSize: 18,
	},
});
const stylesNotFound = StyleSheet.create({
	container: {
		backgroundColor: "#30475E",
		height: "100%",
		borderRadius: 34,
	},
	textContainer: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
		borderRadius: 20,
		borderWidth: 5,
	},
	text: {
		textAlign: "center",
		fontSize: 20,
		padding: 5,
	},
});
