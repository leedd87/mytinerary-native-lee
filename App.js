import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import CitiesScreen from "./src/screens/CitiesScreen";
import MainContainer from "./src/MainContainer";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider>
				<MainContainer />
			</PaperProvider>
		</Provider>
	);
}
