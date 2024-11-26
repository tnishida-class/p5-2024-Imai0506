// キューバ国旗　最終課題
let flagX = 0; 
let flagY = 0; 

function setup() { 
  createCanvas(400, 300); 
  noStroke();
}

function draw() {
  background(220); 
  
  flagX = mouseX - 150; 
  flagY = mouseY - 75;

  for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) {
      fill(0, 51, 153); 
    } else {
      fill(255);
    }
    rect(flagX, flagY + (150 / 5) * i, 300, 150 / 5);
  }

  fill(206, 17, 38); 
  triangle(
    flagX, flagY, 
    flagX, flagY + 150, 
    flagX + 150 / 2 * 1.73, flagY + 150 / 2
  );

  fill(255); 
  drawStar(flagX + 150 / 3.5, flagY + 150 / 2, 20, 5); 
}


function drawStar(cx, cy, r, n) {
  beginShape();
  for (let i = 0; i < n * 2; i++) {
    let theta = PI / n * i - HALF_PI;
    let x = cx + cos(theta) * (i % 2 === 0 ? r : r / 2);
    let y = cy + sin(theta) * (i % 2 === 0 ? r : r / 2);
    vertex(x, y);
  }
  endShape(CLOSE);
}
