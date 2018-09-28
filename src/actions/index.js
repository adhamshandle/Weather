import axios from 'axios';
const API_KEY = "92d4104cd560fb733250718402f1e35b";
export const FETCH_WEATHER = 'FETCH_WEATHER';



const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	
	

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}