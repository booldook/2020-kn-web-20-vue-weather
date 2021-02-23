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

export { getCoords }