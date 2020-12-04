const alphabets = require('./alphabets.json');

const upper = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
const upperAllWords = string => string.split(' ').map(word => upper(word)).join(' ')

function clean(txt, options) {

    const capitalizeFirstLetter = options && typeof options === 'object' && options.capitalizeFirstLetter && typeof options.capitalizeFirstLetter === 'boolean' ? options.capitalizeFirstLetter : false
    const capitalizeAllWords = options && typeof options === 'object' && options.capitalizeAllWords && typeof options.capitalizeAllWords === 'boolean' ? options.capitalizeAllWords : false

    const chars = txt.split('');
    let finalString = '';
    chars.forEach(char => {
        for(alphabet of alphabets) {
            if(alphabet.includes(char)) return finalString += alphabet[0];
        }
        return finalString += char;
    })
    return capitalizeAllWords ? upperAllWords(finalString) : capitalizeFirstLetter ? upper(finalString) : finalString;
}

module.exports = clean;