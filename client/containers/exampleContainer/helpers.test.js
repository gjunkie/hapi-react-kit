const assert = require('assert');
const expect = require('chai').expect;
const nock = require('nock');

const polyfill = require('es6-promise').polyfill;
Object.assign = require('object-assign');
polyfill()

const helpers = require('./helpers');

describe('Request', function() {

  it('should create a new user', function() {
    const user = helpers.default.getNewUser();

    expect(typeof user.id).to.equal('number');
    expect(typeof user.name).to.equal('string');
    expect(typeof user.title).to.equal('string');
  });
})
