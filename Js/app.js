'use strict';
let counter = 0;
let username = prompt('Please enter your name.')
username= username.toLowerCase()
alert('Welcome! You are Akinator here!'+username);
alert('You will guess the answer with yes or no');

let userage = prompt ('Do you think I am older than 21?')
    userage = userage.toLowerCase()
if(userage==='yes'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(userage);
}else{
    alert('Incorrect, Try Again!')
}
 let human = prompt ('Do you think I am a real person?')
    human= human.toLowerCase()
if(human==='yes'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(human);
}else{
    alert('Incorrect, Try Again!')
}
let user = prompt ('Do you think I am a girl?')
user=user.toLowerCase()
if(userage==='yes'){
    alert('Great, guessed right one more time !');
    counter++;
    //console.log(user);
}else{
    alert('Incorrect, Try Again!')
}
let userbirth = prompt ('Do you think I born in February?')
userbirth = userbirth.toLowerCase()
if(userbirth==='yes'){
    alert('Great, guessed right one more time ! ');
    counter++;
    //console.log(userbirth);
}else{
    alert('Incorrect, Try Again!')
}
let userliving = prompt ('Do you think I live in Jordan ?')
userliving = userliving.toLowerCase()
if(userliving==='yes'){
    alert('Great! Thats right.');
    counter++;
    //console.log(userliving);
}else{
    alert('Incorrect, Try Again!')
}
let mynum = 18;
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
alert('You finished your attempts')

let favcountry = ['Egypt','Hind','Australia','Turkey','Palestine']
let mycountry = favcountry[4];
for (let j=0; j<6 ; j++){
let countryGuess = prompt('Guess what is my favourite country?');
if(countryGuess == favcountry[4]){
    alert('Thats Correct you are a creative thinker:D') ;
    counter++;
    break;
}else{
    alert('Try Again :(');
    }
}
alert('You finished your attempts');
for(let index =0;index<favcountry.length;index++){
    console.log(favcountry[index]);
}
alert('Your score out of 7 is'+counter);