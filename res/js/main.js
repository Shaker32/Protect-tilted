import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const battleBus = new Enemy("battlebus", 50, 1, 0, 50, 300);
const fnkid = new Enemy("battlebus", 50, 1, 2, 50, 100);

const foo = new Enemy("Tomas", 50, 1);
const background = new Background();
console.log(foo);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  // clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameLoop znovu
  window.requestAnimationFrame(gameLoop);
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;

  background.draw(ctx);
};

const update = () => {
  battleBus.update();
  fnkid.update();
};
const render = () => {
  battleBus.draw(ctx);
  fnkid.draw(ctx);
};
const fps = () => {};

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};
