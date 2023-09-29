const Triangle = require('./triangle.js');

describe('Triangle',()=>{
    describe('Instantiate',()=>{
        it('should be an instance of Triangle', ()=>{
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('Render', ()=>{
        it(`should return "
        <polygon points="25 200 275 200 150 0" fill="#3effed" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="#770077">SVG</text>
        `, ()=>{
            const triangle = new Triangle('SVG', '#770077', '#3effed');
            expect(triangle.render()).toBe(`
<polygon points="25 200 275 200 150 0" fill="#3effed" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="#770077">SVG</text>
`);
        });
    });
});