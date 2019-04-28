'use strict';
module.exports = function(app) {
  var myMapApp = require('../controllers/myMapAppController');

  // myMapApp Routes
  app.route('/locations')
    .get(myMapApp.list_all_locations)
    .post(myMapApp.create_a_location);

  app.route('/locations/:locationId')
    .get(myMapApp.read_a_location)
    .delete(myMapApp.delete_a_location);
};