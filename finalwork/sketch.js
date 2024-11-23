// キューバ国旗
function setup() {
  createCanvas(300, 150);
  noStroke();

  // 青と白のストライプを描く
  for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) {
      fill(0, 51, 153); // 青
    } else {
      fill(255); // 白
    }
    rect(0, (height / 5) * i, width, height / 5);
  }

  // 赤い三角形を描く
  fill(206, 17, 38); // 赤
  triangle(0, 0, 0, height, height / 2 * 1.73, height / 2);

  // 白い星を描く
  fill(255); // 白
  drawStar(height / 3.5, height / 2, 20, 5); // 星を描画
}

// 星を描く関数
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