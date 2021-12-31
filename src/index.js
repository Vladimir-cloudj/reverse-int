module.exports = function reverse (n) {
	str = n + ''
	// console.log(str[0]);
	
	if (!Number(str[0])) {
		str = str.substr(1);
	}
	return str.split('').reverse().join('');
}
