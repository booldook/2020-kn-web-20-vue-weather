import axios from 'axios'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const params = { units: 'metric', lang: 'kr', appid: process.env.VUE_APP_APPID }

// 현재 위치의 navigator.getPosition()
const getPosition = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((r) => {
			resolve({ lat: r.coords.latitude, lon: r.coords.longitude })
		}, (err) => {
			reject(err)
		})
	});
}

// selectedCity => daily
const getDaily = async (id) => {
	params.id = id
	const r = await axios.get(DAILY_URL, { params })
	return r.data
}

// selectedCity => 5day3hour
const getDays = async () => {

}

// 특정도시 날씨정보 let, lon => daily
const getWorld = async () => {

}

export { getPosition, getDaily, getDays, getWorld }