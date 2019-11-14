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

new Brick(zemelapis, 6, 10);
let brick = new Brick(zemelapis, 5, 6);

new InputHandler(brick);


function gameLoop(timestamp) {
   kontekstas.clearRect(0, 0, 600, 400);
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

