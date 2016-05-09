//import Model from 'ember-data/model';
import DS from 'ember-data';
/*export default Model.extend({

});*/

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  author: DS.attr('string')
});
