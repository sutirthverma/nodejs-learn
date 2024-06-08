module.exports.add;
module.exports.sub;

function calc(op, a, b) {

    switch (op) {
        case 'add':
            return a + b;

        case 'sub':
            return a - b;

        case 'div':
            return a / b;

        case 'mod':
            return a % b;
    }

}

function add(a, b){return a + b };
function sub(a, b){return a - b};

