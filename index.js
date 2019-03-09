// Write your code in this file!

function scuberGreetingForFeet(ridLen) {
    let greeting;
    console.log(ridLen)
   if (ridLen < 400) {
       greeting = "This one is on me!"
   }
   if(ridLen > 2000) {
       greeting = "I will gladly take your thirty bucks."
   }
   if (ridLen > 2500) {
       greeting = "No can do."
   }
   return greeting;
}

function ternaryCheckCity(city) {
    let check;
    city === "NYC" ? check = "Ok, sounds good." : check = "No go."
    return check;
}

function switchOnCharmFromTip(tip) {
    if (tip === "generous"){
        return "Thank you so much.";
    }else if (tip === "not as generous") {
        return "Thank you.";
    }else{
        return "Bye.";
    }
}