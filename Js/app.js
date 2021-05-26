'use strict';
let counter = 0;
let username = prompt('Please enter your name.')
username= username.toLowerCase()
alert('Welcome! You are Akinator here!'+username);
alert('You will guess the answer with yes or no');

function gettingTheAge(){ let userage = prompt ('Do you think I am older than 21?')
    userage = userage.toLowerCase();
if(userage==='yes' || userage==='y'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(userage);
}else{
    alert('Incorrect')
}
}
gettingTheAge();
function checkingReality() { let human = prompt ('Do you think I am a real person?')
    human= human.toLowerCase();
if(human==='yes' || human ==='y'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(human);
}else{
    alert('Incorrect')
}
}
checkingReality();
function determineGender() { let user = prompt ('Do you think I am a girl?')
user=user.toLowerCase()
if(user==='yes' || user==='y'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(user);
}else{
    alert('Incorrect')
}
}
determineGender();
function gettingUserBirth() {let userbirth = prompt ('Do you think I born in February?')
userbirth = userbirth.toLowerCase()
if(userbirth==='yes' || userbirth==='y'){
    alert('Great, guessed right one more time ! ');
    counter++;
    //console.log(userbirth);
}else{
    alert('Incorrect')
}
}
gettingUserBirth();
function gettingUserLiving() {let userLiving = prompt ('Do you think I live in Jordan ?')
userLiving = userLiving.toLowerCase()
if(userLiving==='yes' || userLiving==='y'){
    alert('Great! Thats right.');
    counter++;
    //console.log(userliving);
}else{
    alert('Incorrect')
}
}
gettingUserLiving();
function guessNumber() { let mynum = 18;
for(let i = 0 ; i<4 ; i++ ){
let userNumber = prompt('Please guess a number between 10 and 20');
userNumber= Number(userNumber);
if(userNumber == 18){
    alert('Thats Correct');
    counter++;
    break;
}
else if(userNumber<10){
    alert('The number is too low');
}
else if(userNumber >=10 && userNumber <=20){
    alert('Try Again')
}
else if(userNumber>20){
    alert('The number is too high');
}
else if(userNumber == 18){
    alert('Thats Correct');
    counter++;
    i = 5
    break;
}
}
}
guessNumber();
alert('You finished your attempts The Right answer is 18');
function gettingFavCountry() { let favCountry = ['Palestine','India','Australia','Turkey','Jordan'];
outerLoop : for (let j=0; j<6 ; j++){
let countryGuess = prompt('Guess what is my favourite countries?');
for(let i =0 ; i<favCountry.length ; i++){
    if(countryGuess ===favCountry[i]){
    alert('Thats Correct you are a creative thinker:D') ;
    counter++;
    break outerLoop;
}
}
if (j ===5){
alert('You lost my favourite countries are' + favCountry);
}
}
}
gettingFavCountry();
alert('Your score is '+counter + ' out of 7');