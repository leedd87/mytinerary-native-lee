import { StatusBar } from "expo-status-bar";
import NavBar from "../components/NavBar";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Alert,
	ScrollView,
	ImageBackground,
} from "react-native"; //componente StyleSheet para estilos ya que react-native no puede cargar hojas de estilo

const hero = { uri: "https://wallpaperaccess.com/full/2146330.jpg" };

export default function Hero() {
	return (
		<View>
			<ImageBackground
				source={hero}
				resizeMode="cover"
				style={stylesHero.heroImage}
			>
				<Text style={stylesHero.heroText}>MyTinerary</Text>

				<Text style={stylesHero.heroText}>
					Find your perfect trip, designed by insiders who know and love
					their cities!
				</Text>
			</ImageBackground>
		</View>
	);
}

const stylesHero = StyleSheet.create({
	heroImage: {
		height: 500,
		justifyContent: "center",
		alignItems: "center",
	},
	heroText: {
		color: "black",
		fontSize: 20,
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		width: "100%",
	},
});
