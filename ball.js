class Ball{
    constructor(x,y,r){
        var option={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r= r
    this.body= Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)

        pop();
    }
}