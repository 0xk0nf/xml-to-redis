const redis = require('redis');
const client = redis.createClient();

const storeToRedis = (subdomains, cookies) => {
    client.set('subdomains', JSON.stringify(subdomains));
    for (const key in cookies) {
        client.set(key, cookies[key]);
    }
};

module.exports = { storeToRedis };
