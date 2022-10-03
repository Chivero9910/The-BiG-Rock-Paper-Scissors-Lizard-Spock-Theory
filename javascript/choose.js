class Choose{
    constructor(xParam, yParam, seleccion){
      this.img = new Image();
      if(seleccion === "piedra"){
        this.img.src = "/images/piedra.png"
      }
      this.x = xParam;
      this.y = yParam;
    }

    drawChoose = () => {
        ctx.drawImage(this.img, this.x, this.y);
    }
}