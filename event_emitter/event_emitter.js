const EventEmitter = require('events');

const myE = new EventEmitter();

myE.once('foo', () => {
    console.log('An event occurred');
})


myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
