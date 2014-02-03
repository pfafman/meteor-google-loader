Package.describe({
  summary: 'Google API loader packaged for Meteor'
});

Package.on_use(function (api, where) {

  // Client
  api.use(['jquery', 'session'], 'client');

  api.add_files(['lib/googleLoader.js'], 'client');


  if (api.export) {
    // ???  
    api.export('GoogleLoader', ['client']); 
  }

});


Package.on_test(function (api) {

});
