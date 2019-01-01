const fileUtils = require('./fileUtils.js');
const episodesUtils = require('./episodesUtils.js');
const episodesFilePath = './src/data/episodes.json';

fileUtils.readFile(episodesFilePath).then(content => {
    const episodes = JSON.parse(content).episodes;
    const randomUnPostedEpisode = episodesUtils.getRandomUnPostedEpisode(episodes);

    console.log(randomUnPostedEpisode);

    const updatedEpisodes = episodesUtils.markEpisodeAsPosted(episodes, randomUnPostedEpisode.number);

    fileUtils.writeFile(episodesFilePath, JSON.stringify({episodes: updatedEpisodes}))
        .then(() => console.log('updated episodes.json'));
});