const Shape = require('./shapes');

class Circle extends Shape{
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
}

Circle.prototype.render = function(){
    return`
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

<text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
`;
}

module.exports = Circle;