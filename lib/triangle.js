const Shape = require('./shapes');

class Triangle extends Shape{
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
}

Triangle.prototype.render = function(){
    return`
<polygon points="25 200 275 200 150 0" fill="${this.shapeColor}" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
`;
}

module.exports = Triangle;