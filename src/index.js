import Brick from './brick';
import InputHandler from './input';


let kenvesas = document.getElementsByClassName("gameScreen")[0];
let kontekstas = kenvesas.getContext("2d");
let zemelapis = [];


for (let row = 0; row < 18; row++ ) {
    let eilute = []; 
    for (let column = 0; column < 12; column++) {
        eilute.push(null);
    }
    zemelapis.push(eilute);

}
console.log(zemelapis);

new Brick(zemelapis, 5, 6);
let brick = new Brick(zemelapis, 5, 6);

new InputHandler(brick);

let lastTimestamp = 0;
let timer = 0;


function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTimestamp;
    console.log(deltaTime);
    lastTimestamp = timestamp;
    timer = deltaTime + timer;
   
    if (timer >= 800) {
        for (let row = 17; row >= 0; row-- ) { 
            for (let column = 0; column < 12; column++) {
                if (zemelapis[row][column] != null) {
                    let brick = zemelapis[row][column];
                    brick.moveDown();
                
                }
            }
        }
        timer = 0;
    }

    // draw
    kontekstas.clearRect(0, 0, 400, 600);
    for (let row = 0; row < 18; row++ ) { 
        for (let column = 0; column < 12; column++) {
            if (zemelapis[row][column] != null) {
                let brick = zemelapis[row][column];
                brick.draw(kontekstas);
                

            }
        }
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

