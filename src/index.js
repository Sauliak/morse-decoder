const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const strNumber = expr.match(/.{1,10}/g);
    let strSymbol = [];
    let text = '';

    for(let i = 0; i < strNumber.length; i++) {
        if(strNumber[i] === '**********') {
            strSymbol.push(' ');
        } else {
            const strTwoNum = strNumber[i].match(/.{1,2}/g);
            let Symbol = '';
            for (let i = 0; i < strTwoNum.length; i++) {
                if (strTwoNum[i] === '10') {
                    Symbol = Symbol + '.';
                } else if (strTwoNum[i] === '11') {
                    Symbol = Symbol + '-';
                }
            }
            strSymbol.push(Symbol);
        }
    }

    for(let i = 0; i < strNumber.length; i++) {
        if(strSymbol[i] === ' ' ) {
            text = text + ' ';
        } else {
            text = text + (MORSE_TABLE[strSymbol[i]]);
        }
    }
    return text;
}

module.exports = {
    decode
}