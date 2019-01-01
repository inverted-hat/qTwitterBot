const Twit = require('twit');
const twitterConfig = require('./twitterConfig');
const T = new Twit(twitterConfig);

module.exports = {
    postStatus: status => {
        return new Promise((resolve, reject) => {
            T.post('statuses/update', status, (error, data) => error ? reject(error) : resolve(data));
        });
    }
};