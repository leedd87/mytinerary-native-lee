import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CommentsScreen = ({ route, navigation }) => {
	let ScreenHeight = Dimensions.get("window").height;
	const { id } = route.params;
	console.log(id);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(id));
	}, []);

	const itinerary = useSelector((store) => store.itinerariesReducer.itinerary);
	console.log(itinerary.comments);
	return (
		<View style={{ flex: 1, backgroundColor: "#30475E" }}>
			{/*FLEX PONE PANTALLA COMPLETA, sospecho que el screenheight de abajo funciona*/}
			<FlatList
				style={{ height: ScreenHeight, backgroundColor: "#30475E" }}
				data={itinerary.comments && itinerary.comments}
				showsVerticalScrollIndicator={false}
				renderItem={({ item, index }) => {
					return (
						<View
							key={index}
							// style={stylesCommentsScreen.citiesContainer}
						>
							<View style={stylesCard.container}>
								<Image
									source={{
										uri: item.userId.userPhoto,
									}}
									// style={{ height: 65, width: 65, borderRadius: 50 }}
									style={stylesCard.image}
								/>
								<Text style={stylesCard.text}>{item.comment}</Text>
							</View>
						</View>
					);
				}}
			/>
			<View style={style.login}>
				<View style={style.pleaseLogIn}>
					<Text style={style.pleaseLogInText}>
						Log in to leave a comment
					</Text>
				</View>
				<View style={style.ctaLogIn}>
					<Text
						onPress={() => {
							navigation.navigate("LogIn");
						}}
						style={style.ctaBtn}
					>
						Log In
					</Text>
					<Text style={style.ctaBtn}>Sign Up</Text>
				</View>
			</View>
		</View>
	);
};

export default CommentsScreen;

//CITIES CARD STYLES
const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		borderColor: "#F05454",
		borderWidth: 5,
		borderRadius: "10%",
		marginBottom: 20,
		width: "100%",
		marginTop: 15,
		backgroundColor: "#f5f5f5",
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		fontSize: 16,
		width: "83%",
		// fontFamily: Poppins_500Medium,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 50,
		margin: 5,
	},
});

const style = StyleSheet.create({
	pleaseLogIn: {
		alignItems: "center",
		justifyContent: "center",
		height: "50%",
		fontWeight: "bold",
	},

	ctaLogIn: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		height: "50%",
	},
	ctaBtn: {
		marginHorizontal: 10,
		color: "white",
		borderWidth: 1,
		paddingVertical: 2,
		paddingHorizontal: 10,
		backgroundColor: "#F05454",
		borderRadius: 5,
		fontWeight: "bold",
	},
	login: {
		marginBottom: 10,
		backgroundColor: "white",
		height: 60,
		marginHorizontal: 10,
		borderWidth: 2,
		borderColor: "rgba(94, 94, 94, 0.2)",
		borderRadius: 5,
		borderColor: "#F05454",
	},
});
