const clean = require('./index');
const input = '⛧𝕭𝖊𝖑𝖟𝖊𝖇𝖚𝖙𝖍 ⸸';

console.log('Input : ' + input);
console.log('Output : ' + clean(input, { capitalizeAllWords: true }));