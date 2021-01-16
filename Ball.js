
//creating base class
class Ball{
  // constructure
    constructor(x, y, width, height) {
        var options = {
          frictionAir: 1,
            density:1,
        }
        this.image = loadImage('Superhero-01.png')
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      //displaying
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //ellipse(0, 0, this.width, this.height);
        imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}