import axios from 'axios'
import { getCoords } from '../modules/utils'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const PARAMS = { units: 'metric', lang: 'kr', appid: process.env.VUE_APP_APPID }

// selectedCity => daily
const getDaily = async (v) => {
	const params = v ? { ...PARAMS, id: v } : {...PARAMS, ...await getCoords()}
	const r = await axios.get(DAILY_URL, { params })
	return r.data
}

// selectedCity => 5day3hour
const getDays = async (v) => {
	const params = v ? { ...PARAMS, id: v } : {...PARAMS, ...await getCoords()}
	const r = await axios.get(DAYS_URL, { params })
	return r.data
}

// 특정도시 날씨정보 let, lon => daily
const getWorld = async () => {

}

export { getDaily, getDays, getWorld }