Package.describe({
  name: "pfafman:google-loader",
  summary: 'Google API loader packaged for Meteor',
  version: "0.1.1",
  git: "https://github.com/pfafman/meteor-google-loader.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");

  // Client
  api.use(['jquery', 'session'], 'client');
  api.addFiles('lib/googleLoader.js', 'client');
  api.export('GoogleLoader', 'client'); 
  
});

Package.onTest(function (api) {

});
