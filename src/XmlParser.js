const xml2js = require('xml2js');

const parseXML = async (xmlContent) => {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlContent, (err, result) => {
            if (err) {
                reject(err);
            } else {
                const subdomains = result.config.subdomains[0].subdomain.map(s => s._);
                const cookies = {};
                result.config.cookies[0].cookie.forEach(cookie => {
                    const key = `cookie:${cookie.$.name}:${cookie.$.host}`;
                    cookies[key] = cookie._;
                });
                resolve({ subdomains, cookies });
            }
        });
    });
};

module.exports = { parseXML };
