const fileUtils = require('./fileUtils.js');

fileUtils.readFile('./src/data/episodes.json').then((content) => {
    console.log(JSON.parse(content).episodes);
});