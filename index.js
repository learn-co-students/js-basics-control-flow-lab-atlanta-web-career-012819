// Write your code in this file!
function scuberGreetingForFeet(num) {
  if(num <= 400) return "This one is on me!";
  else if(num > 2500) return "No can do.";
  else return "I will gladly take your thirty bucks.";
}

function ternaryCheckCity(dest) {
  return dest === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  }
}
