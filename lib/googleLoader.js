// Get Google Load script and set Session


GoogleLoader = GoogleLoader || {}

GoogleLoader.callbacks = [];

GoogleLoader.callback = function(google) {
    for (key in GoogleLoader.callbacks) {
        GoogleLoader.callbacks[key](google);
    }
    GoogleLoader.callbacks = [];
}


GoogleLoader.load = function (callback) {
    if (typeof window.google === 'object'  && typeof window.google.load === 'function') {
        if ('function' == typeof callback) {
            callback();
        }
        return;
    }

    if ('function' == typeof callback) {
        GoogleLoader.callbacks.push(callback);
    }
    if (GoogleLoader.initialized) {
        return;
    }
    
    $.getScript("http://www.google.com/jsapi", function () { 
        if (typeof module !== 'undefined' && module.exports) {
            module.exports.google = google;
        } else {
            window.google = google;
        }
        GoogleLoader.initialized = true;
        GoogleLoader.callback(google);
    });
    
};
    
