import axios from 'axios'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const PARAMS = { units: 'metric', lang: 'kr', appid: process.env.VUE_APP_APPID }

// 현재 위치의 navigator.getPosition()
const getCoords = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((r) => {
			resolve({ lat: r.coords.latitude, lon: r.coords.longitude })
		}, (err) => {
			reject(err)
		})
	});
}

const getPosition = async () => {
	return await getDaily(await getCoords())
}


// selectedCity => daily
const getDaily = async (v) => {
	const params = { ...PARAMS }
	if(typeof v === 'string' || typeof v === 'number') {
		params.id = v
	}
	else {
		params.lat = v.lat
		params.lon = v.lon
	}
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