var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
	var electionInstance; 

	it("Initialize with two candidates", function(){
		return Election.deployed().then(function(instance){
			return instance.candidateCount();
		}).then(function(count){
			assert.equal(count,2);
		});
	});

	it("Checks for the values to be correct",function(){

		return Election.deployed().then(function(instance){
			electionInstance = instance; 
			return electionInstance.candidates(1);
		}).then(function(candidate){
			assert.equal(candidate[0],1,"correct id");
			assert.equal(candidate[1],"Candidate 1","candidate name");
			assert.equal(candidate[2],0,"correct vote");
			return electionInstance.candidates(2);
		}).then(function(candidate){
			assert.equal(candidate[0],2,"correct id");
			assert.equal(candidate[1],"Candidate 2","candidate name");
			assert.equal(candidate[2],0,"correct vote");
		});
	});
});

