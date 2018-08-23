// CS81_3_ZacharyDavis_Problem1

// Functions to find the max number in an argument 
var max = function(){ 
	var result = 0; // Sets the number so it has can not be less then zero 
	for (count = 0; count < arguments.length; count++) { // For Loop looking at the values
		if (arguments[count] > result){ // loops through each number see if it greater then result
			result = arguments[count]; // Testing to see if the next number is bigger once result has been modified
		}
	}
return result; // returns the highest number
} 

console.log(max(0,10,100)); // Values for the arguments 

console.log(max(0, -10, -100)); // Values for the arguments






