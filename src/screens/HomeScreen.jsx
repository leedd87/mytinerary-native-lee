import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native"; //componente StyleSheet para estilos ya que react-native no puede cargar hojas de estilo
import Hero from "../components/Hero";
// import ActionTravel from "../components/ActionTravel";
import Carousel from "../components/Carousel";
import PopularText from "../components/PopularText";

export default function HomeScreen({ navigation }) {
	return (
		<ScrollView>
			{/* <Navigation /> */}
			<Hero />
			<View style={styleAction.container}>
				<Text style={styleAction.actionText}>Discover Korea with Us</Text>
				<TouchableOpacity
					style={styleAction.buttonTravel}
					onPress={() => navigation.navigate("CitiesTab")}
				>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Travel
					</Text>
				</TouchableOpacity>
			</View>
			<PopularText />
			<Carousel />
			<StatusBar style="auto" />
		</ScrollView>
	);
}

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
