import { StatusBar } from "expo-status-bar";
import NavBar from "../components/NavBar";
import { StyleSheet, Text, View, ScrollView } from "react-native"; //componente StyleSheet para estilos ya que react-native no puede cargar hojas de estilo
import Hero from "../components/Hero";
import ActionTravel from "../components/ActionTravel";

export default function App() {
	return (
		<ScrollView>
			<NavBar />
			<Hero />
			<ActionTravel />
			<StatusBar style="auto" />
		</ScrollView>
	);
}
