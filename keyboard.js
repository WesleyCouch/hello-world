
//Browser keyboard detection
document.onkeypress = keyClick;
document.onkeydown = getKeyDown;
document.onkeyup = keyClear;

//User keyboard input
var key = "";

//KEYBOARD
function keyClear (e) {

  key = getKeyPressed(e);

  //Movement
  if (key == "W") { box.spd[1] = 0; };
  if (key == "A") { box.spd[0] = 0; };
  if (key == "S") { box.spd[1] = 0; };
  if (key == "D") { box.spd[0] = 0; };
}
function getKeyPressed (e) {
  return String.fromCharCode(e.which || e.keyCode).toUpperCase();
}
function getKeyDown (e) {
  if (e) {
    if (e.keyCode == 8 || e.keyCode == 38 || e.keyCode == 40) { keyClick(e); }
  };
}
function keyClick (e) {

  key = getKeyPressed(e);

  //Movement
  if (key == "W") { box.spd[1] = -5; };
  if (key == "A") { box.spd[0] = -5; };
  if (key == "S") { box.spd[1] = 5; };
  if (key == "D") { box.spd[0] = 5; };

  e.preventDefault();
}