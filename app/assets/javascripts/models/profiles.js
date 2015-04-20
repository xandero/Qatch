var app = app || {};

app.Profile = Backbone.Model.extend({
  urlRoot: function () {
    return '/users/' + this.get('user_id');
  },
});

