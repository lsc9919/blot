//sets parameters for the overall canvas
const width = 120;
const height = 120;

setDocDimensions(width, height);

// added more colors
const colors = ["Blue", "Green", "White", "Red", "Orange", "Yellow", "Magenta", "Purple", "Pink", "LightBlue", "OrangeRed", "LightGreen", "YellowGreen", "Teal",  "#cc66ff", "#ff99ff",
"#0066ff", "#0099ff", "#ccffff"]

const finalLines = [];

// parameters for the size/location of the cube
let xStart = 30
let yStart = 50;
let xEnd = 70;
let yEnd = 90;
let interval = bt.randIntInRange(1, 45);

const polyline = [
  [xStart, yEnd],
  [yEnd, yEnd],
];

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

finalLines.push(polyline);

// outer layer of the cube
drawLines(finalLines, {width: 15 });

// draws the inside cubies and randomizes the colors of each piece
for(let i = xStart; i<=xEnd; i=i+interval){
  for(let j = yStart;j<=yEnd;j=j+interval){
    // changed randomness
    const random = Math.floor(Math.random() * colors.length);
    let color = colors[random]
    drawLines(inner(i,interval,j), { fill: color, width: 15 });
  }
}
