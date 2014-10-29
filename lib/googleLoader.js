// Get Google Load script and set Session

GoogleLoader = (function(){

  var googleLoader = googleLoader || {}

  googleLoader.version = "0.1.0";

  googleLoader.callbacks = [];

  googleLoader.callback = function(google) {
    for (key in googleLoader.callbacks) {
      googleLoader.callbacks[key](google);
    }
    googleLoader.callbacks = [];
  }


  googleLoader.load = function (callback) {
    if (typeof window.google === 'object'  && typeof window.google.load === 'function') {
      if ('function' == typeof callback) {
        callback();
      }
      return;
    }

    if ('function' == typeof callback) {
      googleLoader.callbacks.push(callback);
    }
    if (googleLoader.initialized) {
      return;
    }
    
    $.getScript("https://www.google.com/jsapi", function () { 
      if (typeof module !== 'undefined' && module.exports) {
        module.exports.google = google;
      } else {
        window.google = google;
      }
      googleLoader.initialized = true;
      googleLoader.callback(google);
    });
      
  };

  return googleLoader;
})();


    
