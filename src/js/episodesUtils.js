module.exports = {
    resetEpisodesWhenAllHaveBeenPosted: episodes => {
        const notPostedEpisodes = episodes.filter(episode => !episode.posted);

        if (notPostedEpisodes.length === 0) {
            return episodes.map(episode => {
                episode.posted = false;
                return episode;
            });
        } else {
            return episodes;
        }
    },
    getRandomUnPostedEpisode: episodes => {
        const notPostedEpisodes = episodes.filter(episode => !episode.posted);

        if (notPostedEpisodes.length === 0) {
            return [];
        } else {
            const randomIndex = Math.floor(Math.random() * notPostedEpisodes.length);
            return notPostedEpisodes[randomIndex];
        }
    },
    markEpisodeAsPosted: (episodes, number) => {
        return episodes.map(episode => {
            if(episode.number === number) {
                episode.posted = true;
            }
            return episode;
        });
    }
};