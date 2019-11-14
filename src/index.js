

let canvas = document.getElementsByClassName("gameScreen")[0];
let ctx = canvas.getContext("2d");

let zemelapis = [];

for (let row = 0; row < 18; row++ ) {
    let eilute = []; 
    for (let column = 0; column < 12; column++) {
        eilute.push(null);
    }
    zemelapis.push(eilute);

}
console.log(zemelapis);

zemelapis[5][6] = 1;
zemelapis[6][6] = 1;


function gameLoop(timestamp) {
    for (let row = 0; row < 18; row++ ) { 
        for (let column = 0; column < 12; column++) {
            if (zemelapis[row][column]!=null) {
                ctx.fillStyle = "#f00";
                ctx.fillRect(column * 33.5,row * 33.5, 30, 30);
                
            }
        }
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

