var request = require("supertest");
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"e
 request(app).get('/').expect('Hello World!', done);
 });
});