class Faces{
    constructor(person){
        this.img = new Image();
        if(person === "sheldon"){
            this.img.src="./images/sheldon-face.png"
        } else if(person === "leonard"){
            this.img.src="./images/leonard-face.png"
        } else if(person === "howard"){
            this.img.src="./images/howard-face.png"
        } else if(person === "rajesh"){
            this.img.src="./images/rajesh-face.png"
        }
        this.x = Math.random() * 750;
        this.y = -30;
        this.w = 50;
        this.h = 50;
        this.speed = 1;
        this.name = person
    }

    drawFaces = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    };

    moveFaces = () => {
        this.y += this.speed;
    }


}