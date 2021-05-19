class Iron {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, this.width, this.height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
}