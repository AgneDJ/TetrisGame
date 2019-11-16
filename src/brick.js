export default class Brick {
    constructor(zemelapis, x, y) {
        this.map = zemelapis;
        this.map[y][x] = this;
    

        this.position = {
            x: x,
            y: y
        }

        this.image = document.getElementById('imageBlueBrick');
    }

    draw(ctx, x, y) {
        ctx.drawImage(this.image, this.position.x * 33.5, this.position.y * 33.5);
    }

    update() {

    }

    moveLeft() {
        this.map[this.position.y][this.position.x] = null;

        if (this.position.x <= 0) {
            this.position.x = 0;
        } else {
            this.position.x = this.position.x - 1;
        }

        this.map[this.position.y][this.position.x] = this;
    }

    moveRight() {
        this.map[this.position.y][this.position.x] = null;

        if (this.position.x >= 11) {
            this.position.x = 11;
        } else {
            this.position.x = this.position.x + 1;
        } 
    
        this.map[this.position.y][this.position.x] = this; 
    }

    moveUp() {
        this.map[this.position.y][this.position.x] = null;

        if (this.position.y <= 0) {
            this.position.y = 0
        } else {
        this.position.y = this.position.y - 1;
        }

        this.map[this.position.y][this.position.x] = this;
        
    }

      moveDown() {
        this.map[this.position.y][this.position.x] = null;

        if (this.position.y >= 17) {
            this.position.y = 17 
        } else {
        this.position.y = this.position.y + 1;
        }

        this.map[this.position.y][this.position.x] = this;
    }

        // autoMove() {
        //     this.map[this.position.y][this.position.x] = null;

        //     if (this.position.y >= 17) {
        //         this.position.y = 17 
        //     } else {
        //         this.position.y = this.position.y + 1;
        //     }

        //     this.map[this.position.y][this.position.x] = this;
        // }
}





