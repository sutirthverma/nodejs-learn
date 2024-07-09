const EventEmitter = require('events');

const myE = new EventEmitter();

myE.on('foo', () => {
    console.log('An event occurred');
})

myE.emit('foo');