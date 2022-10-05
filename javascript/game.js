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
    this.piedraResult = new Choose(30, 140, "piedra");
    this.papelResult = new Choose(30, 220, "papel");
    this.tijerasResult = new Choose(30, 300, "tijeras");
    this.lagartoResult = new Choose(30, 380, "lagarto");
    this.spockResult = new Choose(30, 460, "spock");
    this.chooseArr = [
      this.piedra,
      this.papel,
      this.tijeras,
      this.lagarto,
      this.spock,
    ];
    this.election1;
    this.election2;
    this.timerX = 50;
    this.timerH = 700;
    this.frames = 0;
  }

  //FUNCIONES

  gameScore = () => {
    score++;
  };

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.chooseText, 0, 0, canvas.width, canvas.height);
  };

  drawTimer = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(this.timerX, 570, this.timerH, 20);
  };

  timer = () => {
    this.timerH -= 1;
  };

  addFace = () => {
    
  }

  mainCharacterCollision = () => {
    this.chooseArr.forEach((eachChoose, index) => {
      if (
        this.mainCharacter.x < eachChoose.x + eachChoose.w &&
        this.mainCharacter.x + this.mainCharacter.w > eachChoose.x &&
        this.mainCharacter.y < eachChoose.y + eachChoose.h &&
        this.mainCharacter.h + this.mainCharacter.y > eachChoose.y
      ) {
        this.election1 = eachChoose.selection;
        let randomNum1 = Math.random() * 5;
        let randomNum = Math.floor(randomNum1);
        this.election2 = this.chooseArr[randomNum].selection;
        this.conditionals();
      }
    });
  };

  conditionals = () => {
    if (this.election1 === "piedra" && this.election2 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, piedra aplasta a tijeras";
      yourElection.src = "./images/piedra.png";
      rivalElection.src = "./images/tijerasR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "tijeras" && this.election2 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, tijeras decapitan al lagarto";
      yourElection.src = "./images/tijeras.png";
      rivalElection.src = "./images/lagartoR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "lagarto" && this.election2 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, lagarto devora al papel";
      yourElection.src = "./images/lagarto.png";
      rivalElection.src = "./images/papelR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "spock" && this.election2 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, Spock aplasta a tijeras";
      yourElection.src = "./images/spok.png";
      rivalElection.src = "./images/tijerasR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "tijeras" && this.election2 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, Spock aplasta a tijeras";
      yourElection.src = "./images/tijeras.png";
      rivalElection.src = "./images/papelR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "papel" && this.election2 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, papel desaprueba a Spock";
      yourElection.src = "./images/papel.png";
      rivalElection.src = "./images/spokR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "spock" && this.election2 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, Spock desintegra la piedra";
      yourElection.src = "./images/spok.png";
      rivalElection.src = "./images/piedraR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "piedra" && this.election2 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, piedra aplasta a lagarto";
      yourElection.src = "./images/piedra.png";
      rivalElection.src = "./images/lagartoR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "papel" && this.election2 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, papel envuelve la piedra";
      yourElection.src = "./images/papel.png";
      rivalElection.src = "./images/piedraR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "spock" && this.election2 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, piedra aplasta a tijeras";
      yourElection.src = "./images/spok.png";
      rivalElection.src = "./images/piedraR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election1 === "lagarto" && this.election2 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText =
        "Enhorabuena, has ganado a Sheldon, lagarto envenena a Spock";
      yourElection.src = "./images/lagarto.png";
      rivalElection.src = "./images/spokR.png";
      score++;
      scoreSelection.innerText = score;
    }
    if (this.election2 === "piedra" && this.election1 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText = "Sheldon te ha humillado, piedra aplasta a tijeras";
      yourElection2.src = "./images/tijeras.png";
      rivalElection2.src = "./images/piedraR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "tijeras" && this.election1 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText =
        "Sheldon te ha humillado, tijeras decapitan a lagarto";
      yourElection2.src = "./images/lagarto.png";
      rivalElection2.src = "./images/tijerasR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "lagarto" && this.election1 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText = "Sheldon te ha humillado, lagarto envenena a Spock";
      yourElection2.src = "./images/spok.png";
      rivalElection2.src = "./images/lagartoR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "lagarto" && this.election1 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText = "Sheldon te ha humillado, lagarto devora el papel";
      yourElection2.src = "./images/papel.png";
      rivalElection2.src = "./images/lagartoR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "spock" && this.election1 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText =
        "Sheldon te ha humillado, Spock aplasta las tijeras";
      yourElection2.src = "./images/tijeras.png";
      rivalElection2.src = "./images/spokR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "tijeras" && this.election1 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText = "Sheldon te ha humillado, tijeras cortan el papel";
      yourElection2.src = "./images/papel.png";
      rivalElection2.src = "./images/tijerasR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "papel" && this.election1 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText = "Sheldon te ha humillado, papel desaprueba a Spock";
      yourElection2.src = "./images/spok.png";
      rivalElection2.src = "./images/papelR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "spock" && this.election1 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText =
        "Sheldon te ha humillado, Spock desintegra la piedra";
      yourElection2.src = "./images/piedra.png";
      rivalElection2.src = "./images/spokR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "piedra" && this.election1 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText =
        "Sheldon te ha humillado, piedra aplasta al lagarto";
      yourElection2.src = "./images/lagarto.png";
      rivalElection2.src = "./images/piedraR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election2 === "papel" && this.election1 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      looseScreen.style.display = "flex";
      looseText.innerText =
        "Sheldon te ha humillado, papel envuelve a la piedra";
      yourElection2.src = "./images/piedra.png";
      rivalElection2.src = "./images/papelR.png";
      scoreSelectionFinal.innerText = score;
    }
    if (this.election1 === "piedra" && this.election2 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/piedra.png";
      rivalElection.src = "./images/piedraR.png";
      scoreSelection.innerText = score;
    }
    if (this.election1 === "papel" && this.election2 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/papel.png";
      rivalElection.src = "./images/papelR.png";
      scoreSelection.innerText = score;
    }
    if (this.election1 === "tijeras" && this.election2 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/tijeras.png";
      rivalElection.src = "./images/tijerasR.png";
      scoreSelection.innerText = score;
    }
    if (this.election1 === "lagarto" && this.election2 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/lagarto.png";
      rivalElection.src = "./images/lagartoR.png";
      scoreSelection.innerText = score;
    }
    if (this.election1 === "spock" && this.election2 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/spock.png";
      rivalElection.src = "./images/spock.png";
      scoreSelection.innerText = score;
    }
    if (this.election2 === "piedra" && this.election1 === "piedra") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/piedra.png";
      rivalElection.src = "./images/piedraR.png";
      scoreSelection.innerText = score;
    }
    if (this.election2 === "papel" && this.election1 === "papel") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/papel.png";
      rivalElection.src = "./images/papelR.png";
      scoreSelection.innerText = score;
    }
    if (this.election2 === "tijeras" && this.election1 === "tijeras") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/tijeras.png";
      rivalElection.src = "./images/tijerasR.png";
      scoreSelection.innerText = score;
    }
    if (this.election2 === "lagarto" && this.election1 === "lagarto") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/lagarto.png";
      rivalElection.src = "./images/lagartoR.png";
      scoreSelection.innerText = score;
    }
    if (this.election2 === "spock" && this.election1 === "spock") {
      this.isGameOn = false;
      canvas.style.display = "none";
      resultScreen.style.display = "flex";
      winText.innerText = "Empate, ninguno gana";
      yourElection.src = "./images/spock.png";
      rivalElection.src = "./images/spock.png";
      scoreSelection.innerText = score;
    }
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
    this.drawTimer();
    setTimeout(this.timer(), 5000);

    //Acciones y movimientos de los elementos
    this.mainCharacterCollision();

    //Control de la recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
