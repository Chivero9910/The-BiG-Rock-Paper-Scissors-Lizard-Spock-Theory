class Choose {
  constructor(xParam, yParam, seleccion) {
    this.img = new Image();
    if (seleccion === "piedra") {
      this.img.src = "/images/piedra.png";
    } else if (seleccion === "papel") {
      this.img.src = "/images/papel.png";
    } else if (seleccion === "tijeras") {
      this.img.src = "/images/tijeras.png";
    } else if (seleccion === "lagarto") {
      this.img.src = "/images/lagarto.png";
    } else if (seleccion === "spock") {
      this.img.src = "/images/spok.png";
    }

    this.selection = seleccion

    this.x = xParam;
    this.y = yParam;
    this.h = 30;
    this.w = 30;
  }

  drawChoose = () => {
    ctx.drawImage(this.img, this.x, this.y);
  };
}
