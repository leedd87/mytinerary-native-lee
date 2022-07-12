import axios from "axios";

// const url = "http://localhost:4000/";
const url = "https://mytinerary-lee-backend.herokuapp.com/";

const citiesActions = {
	//aca se crean todos las acciones
	getCities: () => {
		return async (dispatch, getState) => {
			const res = await axios.get(url + "api/cities");
			// console.log(res);
			dispatch({ type: "GET_CITIES", payload: res.data.response.cities });
			// console.log(res.data.response.cities);
		};
	},

	getOneCity: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(url + `api/cities/${id}`);

			dispatch({ type: "GET_ONE_CITY", payload: res.data.response });
		};
	},

	filterCities: (search) => {
		return (dispatch, getState) => {
			dispatch({ type: "FILTER_CITIES", payload: search });
		};
	},
};

export default citiesActions; //se importa y se usa en el COMPONENTE en el mapDispatchToProps y para ser usado en el useDispatch
