class Ball {
    constructor(x, y,r) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, 50, options);
      this.r = r;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('purple')
      ellipseMode(CENTER)
      ellipse(0, 0, this.r,this.r);
      pop();
    };
  };
  