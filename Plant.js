class Plant extends BaseClass {
  
  constructor(x,y) {
    super(x,y,75,75);
    this.image = loadImage("peashooter.png");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }

  display() {


        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
    
          imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

  
        
        pop();


    if(this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
