import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import React from "react";
import CitiesCards from "../components/CitiesCards";
import { useEffect, useState } from "react";

import citiesActions from "../../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";

const CitiesScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(citiesActions.getCities());
		//eslint-disable-next-line
	}, []);
	// const [search, setSearch] = useState("");
	// const handleChange = (e) => {
	// 	setSearch(e.target.value);
	// };

	// useEffect(() => {
	// 	dispatch(citiesActions.filterCities(search));
	// 	//eslint-disable-next-line
	// }, [search]);

	const cities = useSelector((store) => store.citiesReducer.filteredCity);

	return (
		<ScrollView>
			{/* <CitiesCards cities={cities} /> */}
			<View style={styles.container}>
				{cities?.length > 0 ? (
					cities.map((city) => {
						return (
							<View key={city._id}>
								<CitiesCards city={city} />
							</View>
							// <View key={element._id}>
							// 	<View style={styles.container}>
							// 		<Image
							// 			source={{
							// 				uri: element.image,
							// 			}}
							// 			style={{ width: 200, height: 200 }}
							// 		/>
							// 		<Text>Cities</Text>
							// 	</View>
							// </View>
						);
					})
				) : (
					<Text>NO FUNCIONO</Text>
				)}
			</View>
		</ScrollView>
	);
};

export default CitiesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
