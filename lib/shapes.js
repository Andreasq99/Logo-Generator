
class Shape {
    constructor(text,textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

Shape.prototype.render = function(){
    throw new Error('Render function must be implemented by children classes');
}

module.exports = Shape;