const fileUtils = require('./fileUtils.js');
const episodesUtils = require('./episodesUtils.js');

fileUtils.readFile('./src/data/episodes.json').then(content => {
    const episodes = JSON.parse(content).episodes;
    const randomUnPostedEpisode = episodesUtils.getRandomUnPostedEpisode(episodes);

    console.log(randomUnPostedEpisode);
});