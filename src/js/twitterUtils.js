const Twit = require('twit');
let T;

module.exports = {
    init: twitterConfig => {
        T = new Twit(twitterConfig);
    },
    postStatus: status => {
        return new Promise((resolve, reject) => {
            T.post('statuses/update', status, (error, data) => error ? reject(error) : resolve(data));
        });
    }
};