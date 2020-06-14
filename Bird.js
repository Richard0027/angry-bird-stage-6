class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.arr = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 220 && this.body.speed > 10){
      var position = [this.body.position.x, this.body.position.y];
      this.arr.push(position);
      console.log(this.arr);
    }
 

    for(var index = 0; index < this.arr.length; index++){
      image(this.image1, this.arr[index][0], this.arr[index][1]);   
    }
  }
}

