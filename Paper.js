class Paper 

{
    constructor(x,y,r)
    {
         var options = {
             "restitution":0.3,
             friction:0.5,
             density:1.2
         }
      
      // this.x=x;
      // this.y=y;
      // this.r=r;

      this.image = loadImage("paper.png")
      this.body=Bodies.circle(x, y, r, options)
      this.r=r;

      World.add(world, this.body); 
    }
    
  
    
     display()
  {
          var paperpos=this.body.position
          
          push()
          translate(paperpos.x, paperpos.y);
          imageMode(CENTER)
          strokeWeight(3);
          image(this.image, 0,0,this.r*2,this.r*2);
          pop()
  }

  

}