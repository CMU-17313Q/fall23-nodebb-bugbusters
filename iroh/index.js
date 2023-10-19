// Referenced from: https://maierfelix.github.io/Iroh/examples/node.js/index.js

/* eslint-disable */
const Iroh = require('iroh');

const stage = new Iroh.Stage(`
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
factorial(9);
`);

// function call
stage.addListener(Iroh.CALL)
    .on('before', (e) => {
        const external = e.external ? '#external' : '';
        console.log(`${' '.repeat(e.indent)}call`, e.name, external, '(', e.arguments, ')');
        // console.log(e.getSource());
    })
    .on('after', (e) => {
        const external = e.external ? '#external' : '';
        console.log(`${' '.repeat(e.indent)}call`, e.name, 'end', external, '->', [e.return]);
        // console.log(e.getSource());
    });

// function
stage.addListener(Iroh.FUNCTION)
    .on('enter', (e) => {
        const sloppy = e.sloppy ? '#sloppy' : '';
        if (e.sloppy) {
            console.log(`${' '.repeat(e.indent)}call`, e.name, sloppy, '(', e.arguments, ')');
            // console.log(e.getSource());
        }
    })
    .on('leave', (e) => {
        const sloppy = e.sloppy ? '#sloppy' : '';
        if (e.sloppy) {
            console.log(`${' '.repeat(e.indent)}call`, e.name, 'end', sloppy, '->', [void 0]);
            // console.log(e.getSource());
        }
    })
    .on('return', (e) => {
        const sloppy = e.sloppy ? '#sloppy' : '';
        if (e.sloppy) {
            console.log(`${' '.repeat(e.indent)}call`, e.name, 'end', sloppy, '->', [e.return]);
            // console.log(e.getSource());
        }
    });
eval(stage.script);
