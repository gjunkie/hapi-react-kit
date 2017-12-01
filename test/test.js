var assert = require('assert');
var expect = require('chai').expect;
var nock = require('nock');

var polyfill = require('es6-promise').polyfill;
Object.assign = require('object-assign');
polyfill()

var API = require('../client/api');
var sampleGet = API.sampleGet;
var samplePost = API.samplePost;

describe('Request', function() {

  it('should fetch a user', function() {
    const sampleUser = {
      id: '1',
      name: 'Master Shake',
      title: 'Detective',
    };

    nock('http://localhost/api')
      .get('/getuser')
      .query({id: 1})
      .reply(200, sampleUser);

    return sampleGet(1).then(function(response) {
      expect(response.id).to.equal(sampleUser.id);
      expect(response.name).to.equal(sampleUser.name);
      expect(response.title).to.equal(sampleUser.title);
    });
  });

  it('should save a user', function() {
    const sampleUser = {
      name: 'Taco Salad',
      title: 'Chef'
    };

    nock('http://localhost/api')
      .post('/createuser')
      .reply(201, {
        id: '2',
        name: 'Taco Salad',
        title: 'Chef'
      });

    return samplePost(sampleUser).then(function(response) {
      expect(response.id).to.equal('2');
      expect(response.name).to.equal(sampleUser.name);
      expect(response.title).to.equal(sampleUser.title);
    });
  });
})
