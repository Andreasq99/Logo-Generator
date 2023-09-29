const shapes = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const questions = [
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color should the logo be? You may enter the name of a standard color or a hex code. If you enter a hex code, please add a # at the start of the code.',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'What text would you like in your logo? No more than 3 characters will be accepted.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color should the text be? You may enter the name of a standard color or a hex code. If you enter a hex code, please add a # at the start of the code.',
        name: 'textColor'
    },
];


function init(){
    inquirer.prompt(questions)
    .then((res)=>{
        console.log(res);
        renderLogo(res);
    });
}

function renderLogo(data){
    if(data.text.length>3){
        console.log('Text input is too long.');
    } else {
        var imageCode;
        switch(data.shape){
            case 'Circle':
                const circle = new Circle(data.text,data.textColor,data.shapeColor);
                imageCode = circle.render();
                writeSVG('circle',imageCode);
                break;
            case 'Triangle':
                const triangle = new Triangle(data.text,data.textColor,data.shapeColor);
                imageCode = triangle.render();
                writeSVG('triangle',imageCode);
                break;
            case 'Square':
                const square = new Square(data.text,data.textColor,data.shapeColor);
                imageCode = square.render();
                writeSVG('square',imageCode);
                break;
        }
    }
}

function writeSVG(shape,imgCode){
    const svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${imgCode}</svg>`;
    fs.writeFile(`./dist/${shape}.svg`,svgCode,(err)=>{
        err 
            ? console.log(err)
            : console.log(`Logo SVG file created! Check ${shape}.svg in the distribution file.`)
    });
}

init();