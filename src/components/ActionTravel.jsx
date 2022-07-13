import {
	StyleSheet,
	Text,
	View,
	Button,
	Alert,
	TouchableOpacity,
	Image,
} from "react-native";
import Carousel from "./Carousel";

const hero = {
	uri: "https://as2.ftcdn.net/v2/jpg/02/97/64/19/1000_F_297641938_ti60o618SDDaKfQLhyQvpcL4nDcs2Hkm.jpg",
};

function ActionTravel() {
	return (
		<>
			<View style={styleAction.container}>
				<Text style={styleAction.actionText}>Discover Korea with Us</Text>
				<TouchableOpacity
					style={styleAction.buttonTravel}
					onPress={() => Alert.alert("Simple Button pressed")}
				>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Travel
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

export default ActionTravel;

const styleAction = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F05454",
		// justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	actionText: {
		fontSize: 20,
		color: "#f5f5f5",
		padding: 5,
	},
	buttonTravel: {
		// backgroundColor: "#f5f5f5",
		padding: 10,
		borderRadius: 5,
		borderColor: "#f5f5f5",
		borderWidth: 2,
	},
});
