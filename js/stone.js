class Stone{
    constructor(repeat){
        
        this.r = repeat;

        var opt = {
            isStatic: false,
            friction: 0.02
        }

        this.body = Bodies.circle(width/2,height - 900,70,opt);
        World.add(world,this.body);

    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        ellipse(this.body.position.x,this.body.position.y,70);
        pop();

    }
}