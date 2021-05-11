class Paper{
    constructor(x,y,r){
        
        var options={
            'isStatic':false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2       
            
        }
        this.image= loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y, 50, options);
        this.r=50;
        World.add(world, this.body);
        
    }

    display(){
      
        image(this.image,this.body.position.x, this.body.position.y, this.r+20, this.r+20);
       
    }
}