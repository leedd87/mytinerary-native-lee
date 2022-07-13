import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TextInput,
} from "react-native";
import React from "react";
import CitiesCards from "../components/CitiesCards";
import { useEffect, useState } from "react";

import citiesActions from "../../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-web";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CitiesScreen = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(citiesActions.getCities());
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(citiesActions.filterCities(input));
	}, [input]);

	const cities = useSelector((store) => store.citiesReducer.filteredCity);
	console.log(input);
	console.log(cities);
	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.container}>
					<View>
						<Text>Cities</Text>
					</View>
					<View>
						<TextInput
							style={stylesInput.input}
							onChangeText={(text) => setInput(text)}
							value={input}
							placeholder="City"
							// keyboardType="default"
						/>
					</View>
					<View>
						{cities?.length > 0 ? (
							cities.map((city) => {
								return (
									<View key={city._id}>
										<CitiesCards city={city} />
									</View>
								);
							})
						) : (
							<Text>NO FUNCIONO</Text>
						)}
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default CitiesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// width: width,
		justifyContent: "center",
	},
});

const stylesCitiesScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
});

const stylesInput = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
