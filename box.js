class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(random(1,255),random(1,255),random(1,255))
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
         
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-2;
          tint(255,this.visibility)
         // rect( this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }
}