import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import usersActions from "../../redux/actions/usersActions";

const LogInScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		alert("hola usuario");

		const logedUser = {
			email: email,
			password: password,
			from: "form-signin",
		};
		let res = await dispatch(usersActions.signInUser(logedUser));
		console.log(res);
		console.log(res.data.message);

		// let messagePopUp = res.data.message;
		// if (res.data.success) {
		// 	toast.success(messagePopUp, { position: "top-center" });
		// 	navigate("/");
		// } else {
		// 	toast.error(messagePopUp, { position: "top-center" });
		// }
	};
	return (
		<View>
			<TextInput
				// style={stylesInput.input}
				onChangeText={(email) => setEmail(email)}
				value={email}
				placeholder="Email"
				keyboardType="default"
			/>
			<TextInput
				// style={stylesInput.input}
				onChangeText={(password) => setPassword(password)}
				value={password}
				placeholder="Password"
				keyboardType="default"
				secureTextEntry
			/>
			<TouchableOpacity>
				<Text
					onPress={() => {
						handleSubmit();
						navigation.navigate("MyTinerary");
					}}
				>
					SUBMIT
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LogInScreen;

// const styles = StyleSheet.create({});
