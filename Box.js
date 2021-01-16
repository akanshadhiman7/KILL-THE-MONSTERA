class Box{
  // constructure
    constructor(x, y, width, height ) {
        var options = {
          'friction': 1,
            'density':30,
            //'restitution':0.8

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wood1.png.png");
        World.add(world, this.body);
      }
      //displaying
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       rect(CENTER);
       strokeWeight(4);
        stroke("yellow"); 
         fill('red'); 
         imageMode(CENTER);
         rect(0, 0, this.width, this.height);
       image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}