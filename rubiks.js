// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 120;
const height = 120;
const colors = ["Blue", "Green", "White", "Red", "Orange", "Yellow"]
setDocDimensions(width, height);

// store final lines here
const finalLines = [];
let xStart = 30
let yStart = 50;
let xEnd = 70;
let yEnd = 90;
let interval = 20;


const polyline = [
  [xStart, yEnd],
  [yEnd, yEnd],
  [yEnd, xStart],
  [xStart, xStart],
  [xStart, yEnd]
];
// x = 30,50,70
// y = 90,70,50
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



drawLines(finalLines, {width: 20 });
// drawLines(inner(30,20, 70), { fill: "Blue", width: 15 });
for(let i = 30; i<=70; i=i+20){
  for(let j = 50;j<=90;j=j+20){
    const random = bt.randIntInRange(0, 5)
    let color = colors[random]
    drawLines(inner(i,20), { fill: color, width: 15 });
  }
}



