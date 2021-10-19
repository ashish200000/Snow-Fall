class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.05,
            density:0.1
            
        }
        
        this.radius = 1
        this.body = Bodies.circle(x, y,1, options);
        
        World.add(world,this.body);
    }
    display() {



        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        noStroke();
        fill("white");

        ellipseMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.r);
        pop();
    }

};