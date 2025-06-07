
let pips = 0;
let roll_rate = 0;
let autosd6 = 0;
let autod6cost = 100;
let clock = 0;

let debugging = true;

// dice  = the amount of dice to roll
// sides = the faces of each die
function rollDie(dice, sides) {
  for(let i = 0; i < dice; i++)
  {
    const roll = Math.floor(Math.random() * sides) + 1;
    pips += roll;
    document.getElementById('pips').innerText = 'Pips: ' + pips;

    const diceFace = document.getElementById('dice-face');
    diceFace.innerText = roll; 
  }
}

function addAutoD6Roller() {
  autosd6 += 1;
  document.getElementById('auto-rollers').innerText = 'Auto-Dice: ' + autosd6;
  //TODO: get this autoD6Roller cost to scale by some math
  pips -= autod6cost;
}

// Milestones 
window.setInterval(function() {
  if (pips > autod6cost)
  {
    document.getElementById('add-autod6-btn').disabled = false;
  }
  else
  {
    document.getElementById('add-autod6-btn').disabled = true;
  }
}
, 10);

// AutoDiceRoller
window.setInterval(function() {
  roll_rate += 1;
  if(roll_rate > 500)
  {
    if (autosd6 > 0)
    {
      rollDie(autosd6,6);
    }
    roll_rate = 0;
  }

  if(debugging)
  {
    console.log(roll_rate);
  }
}
, 1);


