const Shape = require("./shapes");

describe('Shape', () => {
    describe('Instantiate', ()=>{
        it('should be an instance of Shape', ()=>{
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Render', ()=>{
        it('should throw an error: Render function must be implemented by children classes', ()=>{
            const shape = new Shape();
            const renderFunction = ()=> shape.render();
            const err = new Error('Render function must be implemented by children classes');
            expect(renderFunction).toThrow(err);
        });
    });
});