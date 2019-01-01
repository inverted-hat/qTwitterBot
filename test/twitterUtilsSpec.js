const Twit = require('twit');
const twitterUtils = require('../src/js/twitterUtils.js');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('twitterUtils', () => {
    describe('postStatus', () => {
        afterEach(() => {
            Twit.prototype.post.restore();
        });

        it('should call twitt.post with statuses/update and given data and resolve Promise if there is no error', () => {
            //given
            const status = { status: 'someStatus' };
            sinon.stub(Twit.prototype, 'post').callsFake((endpoint, status, callback) => {
                callback(undefined, { some: 'data' });
            });

            //when
            return twitterUtils.postStatus(status).then(() => {
                //then
                sinon.assert.calledWith(Twit.prototype.post, 'statuses/update', status);
            });
        });

        it('should twitt.post with statuses/update and given data and resolve Promise if there is an error', () => {
            //given
            const status = { status: 'someStatus' };
            sinon.stub(Twit.prototype, 'post').callsFake((endpoint, status, callback) => {
                callback({ some: 'error' }, undefined);
            });

            //when
            return twitterUtils.postStatus(status).then(() => expect(true).to.equal(false), () => {
                //then
                sinon.assert.calledWith(Twit.prototype.post, 'statuses/update', status);
            });
        });
    });
});