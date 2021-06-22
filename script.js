const canvas = document.querySelector("canvas");
const   ctx = canvas.getContext("2d");
let speed = 150
const scale = 10
canvas.height = 300;
canvas.width = 300;
const row = canvas.height / scale
const columns = canvas.width / scale 
ctx.fillStyle = "rgb(30, 30, 30)";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
var snake;
var food;
(function setup(){
food = new Food()
snake = new Snake()
food.draw()
snake.draw()
}())

setInterval(onTimerTick, speed); 
function onTimerTick() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    snake.update()
}