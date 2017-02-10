import Routes from './routes/Routes'

//require('normalize.css')
//require('styles/main.scss')

function run() {
  Routes.run(document.getElementById('content'))
}

if (module.hot) {
  module.hot.accept('routes/Routes', () => {
    const RoutesNew = require('routes/Routes');
    RoutesNew.run(document.getElementById('content'))
  })
}

run()
