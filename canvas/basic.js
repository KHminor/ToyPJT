const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;
let canvasWidth = innerWidth;
let canvasHeight = innerHeight;
const interval = 1000 / 60;

function init() {
  canvasWidth = innerWidth;
  canvasHeight = innerHeight;
  canvas.style.width = canvasWidth + "px";
  canvas.style.height = canvasHeight + "px";
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);
}

function render() {
  let now, delta;
  let then = Date.now();

  const frame = () => {
    requestAnimationFrame(frame);
    now = Date.now();
    delta = now - delta;
    if (delta < interval) return;

    then = now - (delta % interval);
  };

  requestAnimationFrame(frame);
}

window.addEventListener("road", () => {
  init();
  render();
});

window.addEventListener("resize", () => {
  init();
});

// ------------------------
// 위 코드가 딱 작업하기 전의 보일러 플레이트
