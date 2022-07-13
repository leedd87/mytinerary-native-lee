import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";
import CitiesScreen from "./src/screens/CitiesScreen";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider>
				{/* <HomeScreen /> */}
				<CitiesScreen />
			</PaperProvider>
		</Provider>
	);
}
