import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('news');
  this.route('entertainment');
  this.route('fashion-beauty');
  this.route('lifestyle');
  this.route('books');
  this.route('contact');
});

export default Router;
