const Shape = require('./shapes');

class Square extends Shape{
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
}

Square.prototype.render = function(){
    return`
<rect x="50" y="0" width="200" height="200"  fill="${this.shapeColor}"/>

<text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
`;
}

module.exports = Square;