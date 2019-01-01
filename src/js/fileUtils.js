const fs = require('fs');

module.exports = {
    readFile: path => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (error, content) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(content);
                }
            });
        });
    },
    writeFile: (path, content) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content, error => error ? reject(error) : resolve());
        });
    }
};