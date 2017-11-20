[![Build Status](https://travis-ci.org/gjunkie/hapi-react-kit.svg?branch=master)](https://travis-ci.org/gjunkie/hapi-react-kit) [![Known Vulnerabilities](https://snyk.io/test/github/gjunkie/hapi-react-kit/badge.svg)](https://snyk.io/test/github/gjunkie/hapi-react-kit) [![Known Vulnerabilities](https://david-dm.org/gjunkie/hapi-react-kit.svg)](https://david-dm.org/gjunkie/hapi-react-kit) [![Known Dev Vulnerabilities](https://david-dm.org/gjunkie/hapi-react-kit/dev-status.svg)](https://david-dm.org/gjunkie/hapi-react-kit?type=dev)

## hapi-react-kit

A hapijs API and react-redux client boilerplate project.

This project got started out of a need to have a boilerplate that didn't tie up the client and server-side logic. Most boilerplate projects coupled them pretty tightly and made replacing their respective frameworks pretty cumbersome.

I'm a huge fan of [hapijs](https://hapijs.com/) and I've been learning a bit of [React](https://facebook.github.io/react/) lately, so I figured I'd start there. I've also set up [react-redux](https://github.com/reactjs/react-redux). Feel free to clone this and swap them out for your preferred frameworks.

I haven't set up a database here at all. For now, I'll leave that up to you. I usually go with [MongoDB](https://www.mongodb.com/) for something like this as it's super easy to set up.

## Installation

- `git clone git@github.com:gjunkie/hapi-react-kit.git <project-name>`
- `cd hapi-react-kit/client`
- `npm install`
- `cd ../hapi-react-kit/server`
- `npm install`

## Running Your App

- `cd hapi-react-kit/client`
- `npm start`
- open second terminal window.
- `cd hapi-react-kit/server`
- `npm start`

## Deployment

Since the client and the API in this project are in the same project, and each needs to run a server, I'd recommend using [Docker Compose](https://docs.docker.com/compose/) for deployment. Otherwise, it would pretty easy to split this repo in two and deploy them separately.

## Tests

- cd into the project.
- `npm test`

## License

MIT (go nuts)
