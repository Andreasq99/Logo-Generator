const Square = require('./square.js');

describe('Square',()=>{
    describe('Instantiate',()=>{
        it('should be an instance of Square', ()=>{
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('Render', ()=>{
        it(`should return "
        <rect x="50" y="0" width="200" height="200"  fill="blue"/>

        <text x="150" y="115" font-size="60" text-anchor="middle" fill="red">SVG</text>
        "`, ()=>{
            const square = new Square('SVG', 'red', 'blue');
            expect(square.render()).toBe(`
<rect x="50" y="0" width="200" height="200"  fill="blue"/>

<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">SVG</text>
`);
        });
    });
});