/*
	I did not use any unnecesary libraries or setups (TS, babel, webpack, etc...), just plain focused on the script.

	Strings are immutable, so I thought 2 ways of solving this:
		1- Create a new string and add the formatted letters.
		2- Split the string in separated characters, format them, and then join them.

	I went for the second option.
*/

function letterChanger(string){
	return string.split("").map( char => replaceLetter(char) ).join("")
}

function replaceLetter(char){

	let ASCII = char.charCodeAt(0);

	if( ( ASCII >= 65 && ASCII < 90 ) || ( ASCII >= 97 && ASCII < 122 ) ){
		return String.fromCharCode( ASCII + 1);
	}else if( ASCII === 90 ){
		return String.fromCharCode(65);
	}else if( ASCII === 122 ){
		return String.fromCharCode(97);
	}

	return char;
	
}

module.exports = { letterChanger, replaceLetter }