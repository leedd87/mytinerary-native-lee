import * as React from "react";
import { Appbar } from "react-native-paper";

const NavBar = () => {
	// const _goBack = () => console.log("Went back");

	const _handleSearch = () => console.log("Searching");

	const _handleMore = () => console.log("Shown more");

	return (
		<Appbar.Header style={{ backgroundColor: "#f5f5f5" }}>
			{/* <Appbar.BackAction onPress={_goBack} /> */}
			<Appbar.Content title="MyTinerary" />
			<Appbar.Action icon="magnify" onPress={_handleSearch} />
			<Appbar.Action icon="dots-vertical" onPress={_handleMore} />
		</Appbar.Header>
	);
};

export default NavBar;
