class player {

        constructor(x,y){
          this.x = x;
          this.y = y;
          this.spt=createSprite(this.x, this.y, 50,50);
          this.spt.shapecolour="orange";
      }

          move(xdir,ydri){
          this.spt.x +=xdir*grid;
          this.spt.y +=ydri*grid;
          }






}