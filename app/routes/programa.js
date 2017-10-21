import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params, transition) {
    return this.get('ajax').request('http://web-unicen.herokuapp.com/api/thing/group/555');
  },

  actions: {
    guardar(h, a, d){
      this.get('ajax').post('http://web-unicen.herokuapp.com/api/thing/', { data: {group: 555 , thing:{ horario: h, actividad: a, descripcion: d } }});
      this.refresh();
    },

    borrar(id){
      this.get('ajax').del('http://web-unicen.herokuapp.com/api/thing/'+id);
    }
  }



});
