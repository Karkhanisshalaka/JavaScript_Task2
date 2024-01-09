// function Area_Perimeter(length,breadth){
//     area = length * breadth;
//     console.log("Area of Rectangle is:" + area);
//     perimeter = 2*(length + breadth)
//     console.log("Perimeter of Rectangle is:" + perimeter);
// }
// Area_Perimeter(10,20);
class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    Area_Rectangle(){
        return this.length * this.breadth;
      
    }
    Perimeter_Rectangle(){
        return 2*(this.length + this.breadth)
        
    }
}
const Rect = new Rectangle(10,20);
console.log("Area of Rectangle is:" + Rect.Area_Rectangle());
console.log("Perimeter of Rectangle is:" + Rect.Perimeter_Rectangle());

const Rect1 = new Rectangle(40,65);
console.log("Area of Rectangle is:" + Rect1.Area_Rectangle());
console.log("Perimeter of Rectangle is:" + Rect1.Perimeter_Rectangle());