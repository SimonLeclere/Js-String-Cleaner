const characters = require('../characters');

const upper = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
const upperAllWords = (string: string) =>
  string
    .split(' ')
    .map((word) => upper(word))
    .join(' ');

interface Options {
  capitalizeFirstLetter?: boolean;
  capitalizeAllWords?: boolean;
}


/**
 * Replace special characters in a string with unicode letters. 
 * @param {String} txt A string to clean
 * @param {Options} options An object containing two optionnal parameters : capitalizeFirstLetter and capitalizeAllWords
 * @returns {String} The cleaned string
 */
function clean(txt: string, options?: Options) {
  if (typeof txt !== 'string') throw new Error('Parameter txt must be a string !');

  const capitalizeFirstLetter =
    options &&
    typeof options === 'object' &&
    options.capitalizeFirstLetter &&
    typeof options.capitalizeFirstLetter === 'boolean'
      ? options.capitalizeFirstLetter
      : false;

  const capitalizeAllWords =
    options &&
    typeof options === 'object' &&
    options.capitalizeAllWords &&
    typeof options.capitalizeAllWords === 'boolean'
      ? options.capitalizeAllWords
      : false;

  const results = [...txt]
    .map((char) => characters[char] || char)
    .join('')
    .trim();

  return capitalizeAllWords ? upperAllWords(results) : capitalizeFirstLetter ? upper(results) : results;
}

export = clean;
