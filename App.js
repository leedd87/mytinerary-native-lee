import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider>
				<HomeScreen />
			</PaperProvider>
		</Provider>
	);
}
