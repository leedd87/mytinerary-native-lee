const initialState = {
	cities: [],
	city: {},
	auxiliar: [],
	filterCities: [],
};

const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CITIES":
			return {
				...state,
				cities: action.payload,
				auxiliar: action.payload,
				filteredCities: action.payload,
			};

		case "GET_ONE_CITY":
			return {
				...state,
				city: action.payload,
			};

		case "FILTER_CITIES":
			const filteredCities = state.cities.filter((city) =>
				city.name.toLowerCase().startsWith(action.payload.toLowerCase())
			);
			return {
				...state,
				filterCities: filteredCities,
			};
		default:
			return state;
	}
};

export default citiesReducer;
