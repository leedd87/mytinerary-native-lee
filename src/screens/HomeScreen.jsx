import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; //componente StyleSheet para estilos ya que react-native no puede cargar hojas de estilo

export default function App() {
	return (
		<View style={styles.container}>
			{/*entrando a la propiedad de styles*/}
			<Text>Hello World!</Text>
			<Text>Welcome to my world</Text>
			<Text>MyTinerary hello</Text>
			<Text>Probando my native app</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
	},
});
