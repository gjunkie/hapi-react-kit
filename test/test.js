var assert = require('assert');
var expect = require('chai').expect;
var nock = require('nock');
var polyfill = require('es6-promise').polyfill;
var API = require('../client/api');
polyfill()

var sampleFetch = API.sampleFetch;
var samplePost = API.samplePost;

describe('Request', function() {

  it('should fetch a user', function() {
    this.timeout(3000)
    let sampleUser = {
      id: '1',
      name: 'Freddie Carthy',
      title: 'Engineer'
    }

    nock('http://localhost:8000/api')
      .get('/exampleget')
      .query({id: 1})
      .reply(200, sampleUser)

    return sampleFetch(1).then(function(response) {
      console.log('got response')
      console.log(response)
      //console.log(sampleUser)
      expect(response.id).to.equal(sampleUser.id)
      expect(response.name).to.equal(sampleUser.name)
      expect(response.title).to.equal(sampleUser.title)
    })
  })

  it('should save a user', function() {
    let sampleUser = {
      name: 'Taco Salad',
      title: 'Chef'
    }

    nock('http://localhost:8000/api')
      .post('/examplepost')
      .reply(201, {
        id: '2',
        name: 'Taco Salad',
        title: 'Chef'
      })

    return samplePost(sampleUser).then(function(response) {
      expect(response.id).to.equal('2')
      expect(response.name).to.equal(sampleUser.name)
      expect(response.title).to.equal(sampleUser.title)
    })
  })
})
