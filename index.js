const request = require('request');
const EResult = require('./resources/EResult.json');
const methods = require('./resources/methods.json');

class SteamWebAPI {
	constructor(key, localAddress, domain) {
		if (key) {
			this.key = key;
		}
  
    this.localAddress = null;
		if (localAddress) {
			this.localAddress = localAddress;
    }

    this.domain = 'api.steampowered.com';
    if(domain) {
      this.domain = domain;
    }
    
    this.userAgent = 'https://www.npmjs.com/package/@doctormckay/steam-webapi v' + require('./package.json').version;
    this.setUpInterfaces();
  }

  setUpInterfaces() {
    for(let iface in methods) {
      if(!(iface in this)) {
        this[iface] = {};
      }

      for(let method of methods[iface]) {
        this[iface][method] = this.get.bind(this, iface, method);
      }
    }
  }

  get(iface, method, input, version = 1) {
    input.key = this.key;
    return new Promise((resolve, reject) => {
      request({
        url: 'https://' + this.domain + '/' + iface + '/' + method + '/v' + version + '/',
        method: 'GET',
        qs: input,
        gzip: true,
        json: true
      }, (err, res, body) => {
        if(err) {
          return reject(err);
        }

        const error = new Error();
        error.statusCode = res.statusCode;
    
        if (res.headers['x-eresult']) {
          error.eresult = parseInt(res.headers['x-eresult'], 10);
          if (res.headers['x-eresult'] != 1) {
            error.message = res.headers['x-error_message'] || EResult[res.headers['x-eresult']];
          }
        }
    
        if (res.statusCode != 200 && !error.message) {
          error.message = res.statusMessage || 'HTTP error ' + res.statusCode;
        }
    
        if (error.message) {
          return reject(error);
        }

        return resolve(body);
      });
    });
  }

  post(iface, method, input, version = 1) {
    input.key = this.key;
    return new Promise((resolve, reject) => {
      request({
        url: 'https://' + this.domain + '/' + iface + '/' + method + '/v' + version + '/',
        method: 'POST',
        form: input,
        gzip: true,
        json: true
      }, (err, res, body) => {
        if(err) {
          return reject(err);
        }

        const error = new Error();
        error.statusCode = res.statusCode;
    
        if (res.headers['x-eresult']) {
          error.eresult = parseInt(res.headers['x-eresult'], 10);
          if (res.headers['x-eresult'] != 1) {
            error.message = res.headers['x-error_message'] || EResult[res.headers['x-eresult']];
          }
        }
    
        if (res.statusCode != 200 && !error.message) {
          error.message = res.statusMessage || 'HTTP error ' + res.statusCode;
        }
    
        if (error.message) {
          return reject(error);
        }

        return resolve(body);
      });
    });
  }
}

module.exports = SteamWebAPI;