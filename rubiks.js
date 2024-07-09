//sets parameters for the overall canvas
const width = 150;
const height = 150;

setDocDimensions(width, height);

// added more colors
const colors = ["Blue", "Green", "White", "Red", "Orange", "Yellow", "Magenta", "Purple", "Pink", "LightBlue", "OrangeRed", "LightGreen", "YellowGreen", "Teal",  "#cc66ff", "#ff99ff",
"#0066ff", "#0099ff", "#ccffff"]


// parameters for the size/location of the cube
let xStart = bt.randIntInRange(10, 100);
let yStart = bt.randIntInRange(30, 80);
let xEnd = bt.randIntInRange(20, (120-interval));
let yEnd = bt.randIntInRange(90, 110);
let interval = bt.randIntInRange(1, 35);



// handles each baby square in the cube
function inner(x, i,y){
  let innerLines = [[
  [x,y],
  [x,y-i],
  [x+i,y-i],
  [x+i,y],
]];
  return innerLines;
}

// draws the inside cubies and randomizes the colors of each piece
for(let i = xStart; i<=xEnd; i=i+interval){
  for(let j = yStart;j<=yEnd;j=j+interval){
    // changed randomness
    const random = Math.floor(Math.random() * colors.length);
    let color = colors[random]
    drawLines(inner(i,interval,j), { fill: color, width: 5 });
  }
}
