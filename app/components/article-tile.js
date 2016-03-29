import Ember from 'ember';

export default Ember.Component.extend({
  isTextShowing: false,
  actions: {
    textShow() {
      this.set('isTextShowing', true);
    },
    textHide() {
      this.set('isTextShowing', false);
    }
  }
});
