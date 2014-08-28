Package.describe({
  summary: 'Google API loader packaged for Meteor',
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-google-loader.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

  // Client
  api.use(['jquery', 'session'], 'client');

  api.add_files(['lib/googleLoader.js'], 'client');


  if (api.export) {
    api.export('GoogleLoader', ['client']); 
  }

});


Package.on_test(function (api) {

});
