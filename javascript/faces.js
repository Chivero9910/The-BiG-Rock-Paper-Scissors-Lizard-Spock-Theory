class Faces{
    constructor(xParam, person){
        this.img = new Image();
        if(person === "sheldon"){
            this.img.src="./images/sheldon-face.png"
        } else if(person === "leonar"){
            this.img.src="./images/leonar-face.png"
        } else if(person === "howard"){
            this.img.src="./images/howard-face.png"
        } else if(person === "rajesh"){
            this.img.src="./images/rajesh-face.png"
        }
        this.x = xParam;
        this.y = -30;
        this.w = 30;
        this.h = 30;
        this.speed = 2;
    }

    drawFaces = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    };

    moveFaces = () => {
        this.y += this.speed;
    }


}