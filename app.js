let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 14;

if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000
}

if (runnerAge > 18 && registeredEarly === true){
  console.log(`Your Race is at 9:30am and your Race Number is ${raceNumber}`)
}else if (runnerAge > 18 && registeredEarly === false){
  console.log(`You didnt register early, your race will be at 11:00am and your race number is ${raceNumber}`)
}else if(runnerAge < 18){
  console.log(`Your race will begin at 12:30 pm and your race number is ${raceNumber}`)
}else{
  console.log(`Please, See the registration desk`)
}