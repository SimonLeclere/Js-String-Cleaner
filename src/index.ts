import characters from './characters.json';

const upper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const upperAllWords = (str: string) =>
  str
    .split(' ')
    .map((word) => upper(word))
    .join(' ');

interface Options {
  capitalizeFirstLetter?: boolean;
  capitalizeAllWords?: boolean;
  keepUnrecognized?: boolean;
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
  
  const keepUnrecognized =
    options &&
    typeof options === 'object' &&
    options.keepUnrecognized &&
    typeof options.keepUnrecognized === 'boolean'
      ? options.keepUnrecognized
      : false;

  const results = [...txt]
    .map((char) => characters[char] ? characters[char] : (keepUnrecognized ? char : ''))
    .join('')
    .trim();

  return capitalizeAllWords ? upperAllWords(results) : capitalizeFirstLetter ? upper(results) : results;
}

export = clean;
