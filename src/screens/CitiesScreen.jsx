import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TextInput,
	FlatList,
} from "react-native";
import React from "react";
import CitiesCards from "../components/CitiesCards";
import { useEffect, useState } from "react";

import citiesActions from "../../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";

// const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CitiesScreen = ({ navigation }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(citiesActions.getCities());
		//eslint-disable-next-line
	}, [cities]);

	useEffect(() => {
		dispatch(citiesActions.filterCities(input));
	}, [input]);

	const cities = useSelector((store) => store.citiesReducer.cities);
	const citiesFiltered = useSelector(
		(store) => store.citiesReducer.filterCities
	);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={{ backgroundColor: "#30475E", height: 600 }}>
					<TextInput
						style={stylesInput.input}
						onChangeText={(text) => setInput(text)}
						value={input}
						placeholder="City"
						keyboardType="default"
					/>
					{citiesFiltered.length > 0 ? (
						<FlatList
							data={citiesFiltered && citiesFiltered}
							showsVerticalScrollIndicator={false}
							renderItem={({ item, index }) => {
								return (
									<View
										key={index}
										style={stylesCitiesScreen.citiesContainer}
									>
										{/* <CitiesCards
											city={item}
											navigation={navigation}
										/> */}

										<View style={stylesCard.container}>
											<Image
												source={{
													uri: item.image,
												}}
												style={{ height: 200 }}
											/>
											<Text
												style={stylesCard.text}
												onPress={() =>
													navigation.navigate("Itineraries", {
														id: item._id,
													})
												}
											>
												{item.name}
											</Text>
										</View>
									</View>
								);
							}}
						/>
					) : (
						<View style={stylesNotFound.container}>
							<Text style={stylesNotFound.text}>CITIES NOT FOUND</Text>
						</View>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default CitiesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#30475E",
	},
	// text: {
	// 	textAlign: "center",
	// },
});

const stylesNotFound = StyleSheet.create({
	container: {
		backgroundColor: "#30475E",
		height: "100%",
		borderRadius: 34,
	},
	text: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
	},
});

const stylesCitiesScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#30475E",
	},
});

const stylesInput = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		fontSize: 20,
	},
});

//CITIES CARD STYLES
const stylesCard = StyleSheet.create({
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
