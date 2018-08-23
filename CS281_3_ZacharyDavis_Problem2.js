// CS281_3_ZacharyDavis_Problem2

function charcount(String, Char){ // String and char parameters
	let count = 0; // Sets the count #
	for (let cc = 0; cc < String.length; cc++) { // Loops through each of the letters in the string
		if (String[cc] == Char) { // Looks for matching letters that match the char
			count += 1; // adds a number to the count 
		}
	}
	return count; // Returns the count number
};

console.log(charcount("oakland", "a")); // Values for the parameters 




