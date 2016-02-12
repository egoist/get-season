'use strict'

module.exports = function (excludeYear) {
	var d = new Date()
	var season = d.getMonth() + 1
	;[10, 7, 4, 1].every(function (val) {
		if (season >= val) {
			season = val
			return false
		}
		return true
	})
	if (typeof excludeYear === 'boolean' && excludeYear) {
		return String(season)
	}
	return d.getFullYear() + String(season)
}
