import Brick from './brick';

export default class InputHandler {
    constructor(brick) {
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 37:
                    brick.moveLeft();
                    break;

                case 39:
                    brick.moveRight();
                    break;

                case 38:
                    brick.moveUp();
                    break;

                case 40:
                    brick.moveDown();
                    break;
                default:
            }
        });

        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 37:
                    if (brick.speed < 0) brick.stop();
                    break;
      
                case 39:
                    if (brick.speed > 0) brick.stop();
                    break;

                case 38:
                    if (brick.speed < 0) brick.stop();
                    break;

                case 40:
                    if (brick.speed > 0) brick.stop();
                    break;
              default:
            }
        });
    }
}