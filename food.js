let colorFood = "blue"
function Food() {
    this.x = (Math.floor((Math.random()*scale)-1)+1)*columns; ///non è random al 100%
    this.y = (Math.floor((Math.random()*scale)-1)+1)*row;

    this.draw=()=> {
        ctx.fillStyle = colorFood
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.update=()=>{
        food.draw()
    }

}

