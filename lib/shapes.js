
class Shape {
    constructor(text,textColor,shape,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

Shape.prototype.render = function(){
    throw new Error("Render function must be implemented by children classes");
}