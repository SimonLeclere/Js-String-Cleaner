const clean = require('./index');

const txt = 'sιмση ℓεcℓεяε#5765';
const cleanText = clean(txt, { capitalizeAllWords: true });

console.log('Original text: ' + txt);
console.log('Cleaned text: ' + cleanText);
console.log('')
console.log(cleanText === 'Simon Leclere#5765' ? 'Success' : 'Failure');