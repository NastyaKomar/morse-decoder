const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let wordArray = expr.split("**********");
	let resultString = "";

	wordArray.forEach((elem) => {
		letters = elem.length / 10;
		for (let i = 0; i < letters; i++) {
			let letter = elem.substr(i * 10, 10)
				.replace(/10/gi, ".")
				.replace(/11/gi, "-").
				replace(/0/gi, "");

			resultString += MORSE_TABLE[letter];
		}
		resultString += " ";
	});
	return resultString.substr(0, resultString.length - 1);
}

module.exports = {
	decode
}