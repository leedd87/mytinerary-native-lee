import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignUpScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setCountries(res.data));
		//eslint-disable-next-line
	}, []);

	const sortedCountries = countries.map((res) => res.name.common).sort();

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const userData = {
			userName: event.target[0].value,
			userLastName: event.target[1].value,
			email: event.target[2].value,
			userPhoto: event.target[4].value,
			// country: event.target[5].value,
			country: country,
			password: event.target[3].value,
			from: "form-signup",
		};

		let res = await dispatch(usersActions.signUpUser(userData));

		let messagePopUp = res.data.message;

		if (res.data.from === "validator") {
			messagePopUp.forEach((alert) => {
				toast.error(alert.message, { position: "bottom-left" });
			});
		}
		if (res.data.from === "signup") {
			if (res.data.success) {
				navigate("/users/signin");
				toast.success(res.data.message, { position: "top-center" });
			} else {
				toast.error(res.data.message, { position: "top-center" });
			}
		}
	};
	return (
		<View>
			<Text>SignUpScreen</Text>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({});
