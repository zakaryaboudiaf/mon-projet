const http = require('http');

test('Doit retourner "Hello World!"', done => {
    http.get('http://localhost:3000', response => {
        var body = '';

        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
            expect(body).toBe('Hello World!');
            done();
        });
    });
});
