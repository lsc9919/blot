// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 120;
const height = 120;
const colors = ["Blue", "Green", "White", "Red", "Orange", "Yellow"]
setDocDimensions(width, height);

// store final lines here
const finalLines = [];
// const innerLines = [];
// create a polyline
const polyline = [
  [30, 90],
  [90, 90],
  [90, 30],
  [30, 30],
  [30, 90]
];

function inner(s, i){
  let innerLines = [[
  [s,90],
  [s,70],
  [s+i,70],
  [s+i,90],
]];
  return innerLines;

// s = 50, i = 20
// function inner(){
//   let innerLines = [[
//   [50,90],
//   [50,70],
//   [70,70],
//   [70,90],
// ]];
//   return innerLines

                }
finalLines.push(polyline);
// innerLines.push(inner);
// transform lines using the toolkit
// bt.rotate(finalLines, 30);


drawLines(finalLines, {width: 20 });
// drawLines(inner(30,20, 70), { fill: "Blue", width: 15 });
for(let i = 30; i<=70; i=i+20){
  for(let j = 50;j<=90;j=j+20){
    const random = bt.randIntInRange(0, 5)
    let color = colors[random]
    drawLines(inner(i,20), { fill: color, width: 15 });
  }
}



