import assert from 'assert'
import { expect } from 'chai'
import nock from 'nock'

import { sampleFetch, samplePost } from '../client/api'

describe('Request', () => {

  it('should fetch a user', (done) => {
    let sampleUser = {
        id: '1',
        name: 'Freddie Carthy',
        title: 'Engineer'
    }

    nock('http://localhost:8000/api')
      .get('/exampleget')
      .query({id: 1})
      .reply(200, sampleUser)

    sampleFetch(1).then(response => {
      expect(response.id).to.equal(sampleUser.id)
      expect(response.name).to.equal(sampleUser.name)
      expect(response.title).to.equal(sampleUser.title)
      done()
    })
  })

  it('should save a user', (done) => {
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

    samplePost(sampleUser).then(response => {
      expect(response.id).to.equal('2')
      expect(response.name).to.equal(sampleUser.name)
      expect(response.title).to.equal(sampleUser.title)
      done()
    })
  })
})
