const fs = require('fs');
const { parseXML } = require('./XmlParser');
const { storeToRedis } = require('./RedisClient');

const filePath = process.argv[2];
const verbose = process.argv.includes('-v');

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const { subdomains, cookies } = await parseXML(data);
    storeToRedis(subdomains, cookies);

    if (verbose) {
        console.log('Stored keys in Redis:', ['subdomains', ...Object.keys(cookies)]);
    }
});
