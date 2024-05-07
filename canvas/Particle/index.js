const canvas = document.querySelector("canvas");

// canvas를 꾸미기 위한 도구(Context)
// canvas의 기본 크기는 width:300px, height: 150px
const ctx = canvas.getContext("2d");
// =====================================

// display ratio = dpr (기기에 따른 비율)
// dpr 1 (1 사각형) => dpr 2 (1/4 사각형 * 4)
//   => dpr 2에서 1픽셀을 실제로 그리는데 4픽셀을 그려서 구현
// 즉 dpr x의 경우 x**2의 크기만큼 세밀하게 표현 되는듯?

// 현재 기기의 dpr 값 알아보는 방법
const dpr = window.devicePixelRatio;
// =====================================

let canvasWidth;
let canvasheight;
let particles;

function init() {
  canvasWidth = innerWidth;
  canvasheight = innerHeight;

  canvas.style.width = canvasWidth + "px";
  canvas.style.height = canvasheight + "px";
  // 위와 같이 canvas를 css를 활용하여 강제로 키웠기에 비율이 망가지기에
  // 아래와 같이 canvas 자체 크기 또한 함께 변경해주기
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasheight * dpr;

  // 서로 다른 기기에 따른 배율 적용 (선명해짐)
  ctx.scale(dpr, dpr);

  particles = [];

  const TOTAL = canvasWidth / 10;

  for (let i = 0; i < TOTAL; i++) {
    const x = randomNumBetween(0, canvasWidth);
    const y = randomNumBetween(0, canvasheight);
    const radius = randomNumBetween(50, 100);
    const vy = randomNumBetween(1, 5);
    const particle = new Particle(x, y, radius, vy);
    particles.push(particle);
  }
}

// dat GUI 사용하기
const feGaussianBlue = document.querySelector("feGaussianBlur");
const feColorMatrix = document.querySelector("feColorMatrix");

const controls = new (function () {
  this.blurValue = 40;
  this.alphaChannel = 100;
  this.alphaOffset = -23;
  this.acc = 1.03;
})();

let gui = new dat.GUI();

const f1 = gui.addFolder("Gooey Effect");
f1.open();

f1.add(controls, "blurValue", 0, 100).onChange((value) => {
  feGaussianBlue.setAttribute("stdDeviation", value);
});

f1.add(controls, "alphaChannel", 1, 200).onChange((value) => {
  feColorMatrix.setAttribute(
    "values",
    `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${value} ${controls.alphaOffset}`
  );
});

f1.add(controls, "alphaOffset", -40, 40).onChange((value) => {
  feColorMatrix.setAttribute(
    "values",
    `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${controls.alphaChannel} ${value}`
  );
});

const f2 = gui.addFolder("Particle Property");
f2.open();

f2.add(controls, "acc", 1, 1.5, 0.01).onChange((value) => {
  particles.forEach((particle) => {
    particle.acc = value;
  });
});

// 그래서 canvas의 css의 크기와 자체 크기를 공통으로 해줘야 작업을 할 때
// 편하기에 공통 변수로 동시에 적용하는게 편하다.
console.log(dpr);

// 사각형 그리기 fillRect(x,y,width,height)
// ctx.fillRect(10, 10, 50, 50);

// 원 그리기
// 우선 그리기 시작한다고 선언하기
// ctx.beginPath();
// arc(x,y,반지름 길이, 시작 각도, 끝 각도, 시계|반시계 방향)
// 각도는 degree가 아닌 radian을 사용하기에 Math.PI/180이
//    1도이기에*360하면 360도
// 방향은 default가 시계방향
// ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 360);

// fill() 색상
// ctx.fillStyle = "blue";
// ctx.fill();
// 만약 색상을 사용하지 않는다면
// ctx.stroke();
// 마침
// ctx.closePath();

class Particle {
  constructor(x, y, radius, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vy = vy;
    this.acc = 1.02;
  }
  update() {
    this.vy *= this.acc;
    this.y += this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
}

const randomNumBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

let interval = 1000 / 60; // 60fps
let now, delta;
let then = Date.now();

// 애니메이션화 시키기
function animate() {
  // window.requestAnimationFrame은 매 프레임마다 실행하는 함수 (사용 모니터의 주사율에 따른 편차가 발생)
  // FPS(Frame per Second)로 animat 함수를 몇번이나 실행시킬지를 의미
  // 1초에 60번 실행 -> 16ms, 1초에 10번 실행 -> 100ms
  window.requestAnimationFrame(animate);

  now = Date.now();
  delta = now - then;

  if (interval > delta) return;

  // 기존 그림 제거
  ctx.clearRect(0, 0, canvasWidth, canvasheight);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();

    if (particle.y - particle.radius > canvasheight) {
      particle.y = -particle.radius;
      particle.x = randomNumBetween(0, canvasWidth);
      particle.radius = randomNumBetween(50, 100);
      particle.vy = randomNumBetween(1, 5);
    }
  });

  then = now - (delta % interval);
}

window.addEventListener("load", () => {
  init();
  animate();
});

window.addEventListener("resize", () => {
  init();
});
