import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import usersActions from "../../redux/actions/usersActions";
import { Input, Button } from "@rneui/themed";

const image = { uri: "https://wallpapercave.com/wp/wp7318054.jpg" };

const LogInScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		const logedUser = {
			email: email,
			password: password,
			from: "form-signin",
		};
		let res = await dispatch(usersActions.signInUser(logedUser));
		console.log(res);
		console.log(res.data.message);
		alert(res.data.message);

		// let messagePopUp = res.data.message;
		// if (res.data.success) {
		// 	toast.success(messagePopUp, { position: "top-center" });
		// 	navigate("/");
		// } else {
		// 	toast.error(messagePopUp, { position: "top-center" });
		// }
	};
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(email) => setEmail(email)}
					value={email}
					placeholder="Email"
					keyboardType="default"
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
					}}
				/>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(password) => setPassword(password)}
					value={password}
					placeholder="Password"
					keyboardType="default"
					secureTextEntry
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
					}}
				/>
				<TouchableOpacity
					style={{
						// justifyContent: "center",
						alignItems: "center",
						borderRadius: 20,
						backgroundColor: "red",
						marginHorizontal: 150,
						backgroundColor: "#F05454",
						padding: 10,
					}}
				>
					<Text
						onPress={() => {
							handleSubmit();
							navigation.navigate("MyTinerary");
						}}
						style={{
							textAlign: "center",
							color: "#f5f5f5",
						}}
					>
						SUBMIT
					</Text>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: "white",
						flexDirection: "row",
						justifyContent: "center",
						marginHorizontal: 50,
						alignItems: "center",
						marginTop: 20,
						borderRadius: 34,
					}}
				>
					<Text>Dont have an account? </Text>
					<Text
						onPress={() => {
							navigation.navigate("SignUp");
						}}
						style={{
							// textAlign: "center",
							padding: 5,
							color: "#F05454",
						}}
					>
						Sign Up
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
	button: {
		borderRadius: 20,
	},
});
