function scuberGreetingForFeet(feet) {
  let greeting;
  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  } else {
    greeting = 'No can do.'
  }
  return greeting;
}

function ternaryCheckCity(city) {
  let response;
  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'

  }
  return response;
}