var botScore=0;
var playerScore=0;
//connect to the HTML target the Id and let it know what it does when you click the function
document.getElementById("fire").onclick=playerThrowsFire;
document.getElementById("water").onclick=playerThrowsWater;
document.getElementById("earth").onclick=playerThrowsEarth;

//give each of the functions
function playerThrowsFire(){
    var botsWeapon=getRandomWeapon();
		checkWhoWon(botsWeapon,"fire");
}
function playerThrowsWater(){
	var botsWeapon=getRandomWeapon()
	checkWhoWon(botsWeapon,"water")
}
function playerThrowsEarth(){
	var botsWeapon=getRandomWeapon()
	checkWhoWon(botsWeapon,"earth")
}
function getRandomWeapon(){
	var randomNumber=Math.random();

	if(randomNumber<.33){
		botsWeapon="fire";
	}
	else if(randomNumber<.6666){
		botsWeapon="water";
	}
	else{
		botsWeapon="earth"
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon===playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon==="earth" && playersWeapon==="water") ||
		(botsWeapon==="water" && playersWeapon==="fire") ||
		(botsWeapon==="fire" && playersWeapon==="earth")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you lose");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("YIP YIP!");

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
