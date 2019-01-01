const fileUtils = require('../src/js/fileUtils.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('fileUtils', () => {
    describe('readFile', () => {
        it('should resolve Promise with content of file', () => {
            return fileUtils.readFile('./test/data/test.json').then(content => {
                expect(content).to.equal('{\n  "episodes": [\n    {\n      "number": 1,\n      "title": "Die drei ??? und der Super-Papagei",\n      "posted": false\n    },\n    {\n      "number": 2,\n      "title": "Die drei ??? und der Phantomsee",\n      "posted": false\n    },\n    {\n      "number": 3,\n      "title": "Die drei ??? und der Karpatenhund",\n      "posted": false\n    }\n  ]\n}');
            });
        });

        it('should reject Promise with error', () => {
            return fileUtils.readFile('./notExistingFile')
                .then(() => {
                    expect(true).to.equal(false);
                }, error => {
                    expect(error.message).to.equal('ENOENT: no such file or directory, open \'./notExistingFile\'');
                });
        });
    });

    describe('writeFile', () => {
        it('should resolve Promise when file was successfully written', (done) => {
            //given
            const path = './test/data/writtenFile.json';
            const contentToWrite = JSON.stringify({ timestamp: Date.now() });

            //when
            fileUtils.writeFile(path, contentToWrite).then(() => {
                //then
                fileUtils.readFile(path).then(content => {
                    expect(content).to.equal(contentToWrite);
                    done();
                });
            });
        });
    })
});