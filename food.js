let colorFood = "blue"

// draw a random square (food)
function Food() {
    this.x = (Math.floor((Math.random()*scale)-1)+1)*columns; ///it's not fully random
    this.y = (Math.floor((Math.random()*scale)-1)+1)*row;

    this.draw=()=> {
        ctx.fillStyle = colorFood
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.update=()=>{
        food.draw()
    }

}

