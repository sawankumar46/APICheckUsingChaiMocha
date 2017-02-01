var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseURL = "https://swapi.co/api";
var util = require("util");

describe('returns luke', function(){
    it('returns luke', function(done){
        request.get({url: baseURL + '/people/1/' },
            function(error, response, body){
                expect(response.statusCode).to.equal(200);
                console.log(body);
                var bodyObj  = JSON.parse(body);
                expect(bodyObj.name).to.equal("Luke Skywalker");
                expect(bodyObj.hair_color).to.equal("blond");
                
                done();
            });
    });

});