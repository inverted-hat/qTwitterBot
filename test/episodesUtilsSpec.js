const episodesUtils = require('../src/js/episodesUtils.js');
const expect = require('chai').expect;

describe('episodesUtils', () => {
    describe('getRandomUnPostedEpisode', () => {
        it('should return a random episode where posted is false', () => {
            //given
            const episodes = [
                { number: 10, posted: false },
                { number: 8, posted: true },
                { number: 77, posted: false }
            ];

            //when
            const result = episodesUtils.getRandomUnPostedEpisode(episodes);

            //then
            expect(result.number).to.be.oneOf([10, 77]);
            expect(result.number).to.not.equal(8);
        });

        it('should return an empty array when all episodes are posted true', () => {
            //given
            const episodes = [
                { number: 10, posted: true },
                { number: 8, posted: true },
                { number: 77, posted: true }
            ];

            //when
            const result = episodesUtils.getRandomUnPostedEpisode(episodes);

            //then
            expect(result.length).to.equal(0);
        });
    });

    describe('markEpisodeAsPosted', () => {
        it('should set posted to true for given episode', () => {
            //given
            const episodes = [
                { number: 10, posted: false },
                { number: 8, posted: true },
                { number: 77, posted: false }
            ];

            //when
            const result = episodesUtils.markEpisodeAsPosted(episodes, 77);

            //then
            expect(result[0]).to.deep.equal({ number: 10, posted: false });
            expect(result[1]).to.deep.equal({ number: 8, posted: true });
            expect(result[2]).to.deep.equal({ number: 77, posted: true });
        });
    });
});