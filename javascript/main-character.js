class MainCharacter {
    constructor() {
        this.img = new Image();
        this.img.src = "./images/main-character.png"
        this.x = canvas.width - 80;
        this.y = canvas.height / 2;
    }

    //Dibujado del MainCharacter
    drawMainCharacter = () => {
        ctx.drawImage(this.img, this.x, this.y);
    }

    //Movimiento del MainCharacter
    mainCharacterX = () => {
        this.x -= 20;
    }
    mainCharacterXPlus = () => {
        this.x += 20;
    }
    mainCharacterY = () => {
        this.y -= 20;
    }
    mainCharacterYPlus = () => {
        this.y += 20;
    }
}