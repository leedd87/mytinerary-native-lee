import { StatusBar } from "expo-status-bar";
import NavBar from "../components/NavBar";
import { StyleSheet, Text, View, ScrollView } from "react-native"; //componente StyleSheet para estilos ya que react-native no puede cargar hojas de estilo
import Hero from "../components/Hero";
import ActionTravel from "../components/ActionTravel";
import Carousel from "../components/Carousel";

export default function Homescreen() {
	return (
		<ScrollView>
			<NavBar />
			<Hero />
			<ActionTravel />
			<Carousel />
			<StatusBar style="auto" />
		</ScrollView>
	);
}
