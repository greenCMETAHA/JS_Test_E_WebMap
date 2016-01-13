import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('vacancies'); //just for a begin step
  this.route('map-vacancies');
  this.route('map');
});

export default Router;
