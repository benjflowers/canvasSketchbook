const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let r = 100;
let g = 100;
let b = 100;

const setFillStyle = (ctx, r = 100, g = 100, b = 100) => {
  ctx.fillStyle = `rgb(${r},${g},${b})`;
}

let height = 1000;
let width = 1000
const setCanvasSize = (canvas, height = 300, width = 300) => {
  canvas.height = height;
  canvas.width = width;
}

const rect = (ctx, xPos, yPos, height, width) => {
  ctx.strokeRect(xPos, yPos, height, width)
};

setCanvasSize(canvas, height, width);

const DIM = 4;
const rows = [];

setFillStyle(ctx, 200, 200, 200);
for(let j = 0; j < DIM; j++) {
  let row = {};
  row[`${j}`] = [];
  for(let i = 0; i < DIM; i++) {
    let xPos = i * ( width/DIM)
    row[`${j}`].push(xPos);
    rect(ctx, xPos, j * (height/DIM), height/DIM, width/DIM);
  }
  rows.push(row)
}

const getMousePos = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

function draw(e){
  let x = getMousePos(canvas, e)['x'];
  let y = getMousePos(canvas, e)['y'];

  // rows.forEach( row => {

  // } )
  // console.log(`x:${x}, y:${y}`);
}
