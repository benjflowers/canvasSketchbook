const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const mouseYDebug = document.getElementById('mouse-y');

const getMousePos = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const setFillStyle = (ctx, r = 100, g = 100, b = 100) => {
  ctx.fillStyle = `rgb(${r},${g},${b})`;
}

const setCanvasSize = (canvas, height = 300, width = 300) => {
  canvas.height = height;
  canvas.width = width;
}

const rect = (ctx, xPos, yPos, height, width) => {
  ctx.strokeRect(xPos, yPos, height, width)
};

const DIM = 4;
const rows = [];

let r = 100;
let g = 100;
let b = 100;

let height = 1000;
let width = 1000;

const step = height/DIM;

setCanvasSize(canvas, height, width);
setFillStyle(ctx, 200, 200, 200);

for(let j = 0; j < DIM; j++) {
  let yPos = j * (height/DIM);
  let row = {};
  row[`${yPos}`] = [];
  for(let i = 0; i < DIM; i++) {
    let xPos = i * ( width/DIM)
    row[`${yPos}`].push(xPos);
    rect(ctx, xPos, yPos, height/DIM, width/DIM);
  }
  rows.push(row)
}

function draw(e){
  let x = getMousePos(canvas, e)['x'];
  let y = getMousePos(canvas, e)['y'];
  mouseYDebug.innerText = `Mouse Y Position: ${y}`;
  let rowIndex = Math.floor(y / step);
  console.log(rows[rowIndex]);
}
