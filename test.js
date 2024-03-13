const assert = require('assert');
const http = require('http');

describe('Test de l\'application', function() {
    it('Doit retourner "Hello World!"', function(done) {
        http.get('http://localhost:3000', function(response) {
            var body = '';

            response.on('data', function(d) {
                body += d;
            });

            response.on('end', function() {
                assert.equal(body, 'Hello World!');
                done();
            });
        });
    });
});
