export function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


export function valueToColor(value)  {
  if (value < 0) value += 100;
  let rHex = Math.round((value * 255) / 100); 
  let gHex = 255 - rHex; 
  gHex = gHex.toString(16); 
  rHex = rHex.toString(16);
  gHex = gHex.length === 1 ? `0${gHex}` : gHex; 
  rHex = rHex.length === 1 ? `0${rHex}` : rHex;
  return `#${rHex}${gHex}00`;
};

