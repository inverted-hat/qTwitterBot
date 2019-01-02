<p align="center">
    <img alt="qTwitterBot" src="https://raw.githubusercontent.com/inverted-hat/qTwitterBot/master/img/logoRound.png" width="200">
</p>

<p align="center">
    A twitter bot posting a random [Three Investigators](https://en.wikipedia.org/wiki/Three_Investigators#Germany) audio drama each day.
</p>

<p align="center">
    [![Build Status](https://travis-ci.org/inverted-hat/qTwitterBot.svg?branch=master)](https://travis-ci.org/inverted-hat/qTwitterBot)
    [![Coverage Status](https://coveralls.io/repos/github/inverted-hat/qTwitterBot/badge.svg?branch=master)](https://coveralls.io/github/inverted-hat/qTwitterBot?branch=master)
    [![GitHub license](https://img.shields.io/github/license/inverted-hat/qTwitterBot.svg)](https://github.com/inverted-hat/qTwitterBot/blob/master/LICENSE)
    [![Dependency Status](https://david-dm.org/inverted-hat/qTwitterBot.svg)](https://david-dm.org/inverted-hat/qTwitterBot)
<p align="center">


## What is qTwitterBot?
The German Three Investigators audio dramas are extremely popular, even among adults.
For many Germans it is common to listen to them while they are falling asleep.
The daily evening challenge is to chose an episode. qTwitterBot helps overcome this tedious task by tweeting a randomly chosen episode every evening.
Of course it memorises already suggested episodes, so they do not recur until all others have been tweeted.

See this bot at work on [Twitter](https://twitter.com/DreiTaglich).


## Running qTwitterBot
Add a `twitterConfig.js` file under `src/data/js` containing your Twitter App Credentials in the following format:
```javascript
module.exports = {
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...'
};
```
Run `npm install --production` to install the required dependencies.

Run `npm start` to tweet a random episode.

Configure a cron job or the like to tweet a random episode every day.
