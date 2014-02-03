Meteor-Google-Loader
====================

Google API loader packaged for Meteor

## Installation

* Pre-Install [Meteorite](https://github.com/oortcloud/meteorite) to use [Atmosphere](https://atmosphere.meteor.com)

```sh
    [sudo] npm install -g meteorite
```

Note this is not on Atmosphere yet.  You can add it if you want by editing your meteor upper level smart.json file with a "git" entry:

```
{
    "packages": {
        "google-loader": {
            "git": "https://github.com/pfafman/meteor-google-loader.git"
        },
        ....
    }
}
```
and then run meteorite to install.

```
    mrt add google-loader
```

##Usage

	GoogleLoader.load(function(googleObj) {
		// Add what you want it to do here
		googleObj.load(...);
		// 'google' will also be defined in global space
	});

## License

MIT