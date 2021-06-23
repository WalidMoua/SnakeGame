//snake set up
let colorSnake = "#fffff0"
let direction ;
let total = 1;

//draw Snake
function Snake() {
    this.y = canvas.width/2;
    this.x = canvas.height/2;
    console.log(this.x, this.y)
    this.snakeTail = [];
    this.draw = () => {
        ctx.fillStyle = "rgb(30, 30, 30)";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        for(let i=0; i<this.snakeTail.length;i++){
            ctx.fillStyle = "#fffff0"
            ctx.fillRect(this.snakeTail[i].x, this.snakeTail[i].y, scale, scale)
        }
        ctx.fillStyle = colorSnake
        ctx.fillRect(this.x, this.y, scale, scale) 
    }

    //update every object in canvas
    this.update= () => {
        for (let i = 0; i< this.snakeTail.length-1;i++) {
            this.snakeTail[i]=this.snakeTail[i+1]
        }
        this.snakeTail[total-1] = {x:this.x, y:this.y}
        snake.draw()
        food.draw()
        this.checkMove()
        this.checkEdge()
        this.checkEat()
        this.checkDeath()
    }

    //Check for exit of the snake
    this.checkEdge = () => {
    if(this.y >= canvas.height) {return this.y = 0}
    else if (this.y < 0) {return this.y = canvas.height}
    else if (this.x >= canvas.width) { return this.x = 0}
    else if (this.x <0) {return this.x = canvas.width}
    }
    //change direction of the snake 
    this.checkMove = () => {  
        if     (direction==38) {this.y=this.y-scale;}
        else if(direction==37) {this.x=this.x-scale;}
        else if(direction==40) {this.y=this.y+scale;}
        else if(direction==39) {this.x= this.x+scale;}
        }
    //check if the snake ate food    
    this.checkEat = () => {
        if(this.x == food.x && this.y == food.y){
            food = new Food();
            total++
            
        }
    }

    //check if the snake collide with itself
    this.checkDeath = () => {
        for(let i=0;i<this.snakeTail.length; i++){
            if (this.snakeTail[i].x == this.x && this.snakeTail[i].y==this.y){
            if(this.x==canvas.height/2 && this.y==canvas.width/2){return}
            else {
                alert("Hai Perso!")
                total=1
                this.snakeTail = []
                this.y = canvas.width/2;
                this.x = canvas.height/2;
                direction=0
            }

            }
        }
    }
}

//check for arrow keypress
document.onkeydown = checkMove
function checkMove (e) {
e = e || window.event;
if (e.keyCode=="38" & direction!==40) {
direction = 38
}
else if (e.keyCode=="40" & direction!==38){
    direction = 40
}
else if(e.keyCode=="37" & direction!==39){
    direction = 37
}
else if(e.keyCode=="39" & direction!==37){
    direction = 39
}
}