class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/bg.jpg";
    this.isGameOn = true;
    this.chooseText = new Image();
    this.chooseText.src = "./images/mainText.png";
    this.mainCharacter = new MainCharacter();
    this.piedra = new Choose(30, 140, "piedra");
    this.papel = new Choose(30, 220, "papel");
    this.tijeras = new Choose(30, 300, "tijeras");
    this.lagarto = new Choose(30, 380, "lagarto");
    this.spock = new Choose(30, 460, "spock");
    this.chooseArr = [
      this.piedra,
      this.papel,
      this.tijeras,
      this.lagarto,
      this.spock,
    ];
  }

  //FUNCIONES
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.chooseText, 0, 0, canvas.width, canvas.height);
  };

  mainCharacterCollision = () => {
    this.chooseArr.forEach((eachChoose) => {
      if (
        this.mainCharacter.x < eachChoose.x + eachChoose.w &&
        this.mainCharacter.x + this.mainCharacter.w > eachChoose.x &&
        this.mainCharacter.y < eachChoose.y + eachChoose.h &&
        this.mainCharacter.h + this.mainCharacter.y > eachChoose.y
      ) {
        console.log("collision");
      }
    });
  };

  gameLoop = () => {
    //Dibujado de los elementos
    this.drawFondo();
    this.mainCharacter.drawMainCharacter();
    this.piedra.drawChoose();
    this.papel.drawChoose();
    this.tijeras.drawChoose();
    this.lagarto.drawChoose();
    this.spock.drawChoose();

    //Acciones y movimientos de los elementos
    this.mainCharacterCollision();

    //Control de la recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
