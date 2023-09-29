const Circle = require('./circle.js');

describe('Circle',()=>{
    describe('Instantiate',()=>{
        it('should be an instance of Circle', ()=>{
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('Render', ()=>{
        it(`should return "
        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>
        "`, ()=>{
            const circle = new Circle('SVG', 'white', 'green');
            expect(circle.render()).toBe(`
<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>
`);
        });
    });
});