class Game {
    constructor() {
        this.fondo = new Image();
        this.fondo.src = "./images/bg.jpg"
        this.isGameOn = true;
        this.chooseText = new Image();
        this.chooseText.src = "./images/mainText.png"
        this.mainCharacter = new MainCharacter();
    }

    //FUNCIONES
    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.chooseText, 0, 0, canvas.width, canvas.height);
    }

    gameLoop = () => {
        //Dibujado de los elementos
        this.drawFondo();
        this.mainCharacter.drawMainCharacter();
        
        

        //Control de la recursión
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop);
     }
    }
}