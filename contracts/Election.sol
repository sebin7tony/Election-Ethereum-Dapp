pragma solidity ^0.4.24;

contract Election{
	
	//Stores the candidate value
	//Since we use public it will give default getter method \
	//to access this field in the truffle console.
	//Access like app.candidate() 
	string public candidate;

	//It is the constructor
	function Election() public {

		candidate = "Candidate1";
	}
}