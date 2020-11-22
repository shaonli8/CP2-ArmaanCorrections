class Dustbin{ 
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.image = loadImage("dustbingreen.png")
     
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;       
        
        World.add(world, this.body);
     }

    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image, pos.x, pos.y-50,this.width,this.height*4)
       // rect(pos.x, pos.y, this.width, this.height);
    }
 }
