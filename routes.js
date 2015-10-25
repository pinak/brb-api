var controllers = require('./controllers/load.js');

// Express Routing
module.exports = function(app) {
	app.get('/', controllers.hello.printHello);
}
