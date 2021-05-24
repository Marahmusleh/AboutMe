'use strict';
let username = prompt('Please enter your name.')
username= username.toLowerCase()
alert('Welcome! You are Akinator here!'+username)
alert('You will guess the answer with yes or no')

let userage = prompt ('Do you think I am older than 21?')
    userage = userage.toLowerCase()
if(userage==='yes'){
    alert('Great, guessed right one more time !');
    console.log(userage);
}else{
    alert('Incorrect, Try Again!')
}

let user = prompt ('Do you think I am a girl?')
user=user.toLowerCase()
if(userage==='yes'){
    alert('Great, guessed right one more time !');
    console.log(user);
}else{
    alert('Incorrect, Try Again!')
}
let userbirth = prompt ('Do you think I born in February?')
userbirth = userbirth.toLowerCase()
if(userbirth==='yes'){
    alert('Great, guessed right one more time ! ');
    console.log(userbirth);
}else{
    alert('Incorrect, Try Again!')
}
let userliving = prompt ('Do you think I live in Jordan ?')
userliving = userliving.toLowerCase()
if(userliving==='yes'){
    alert('Great! Thats right.');
    console.log(userliving);
}else{
    alert('Incorrect, Try Again!')
}
