const { parseXML } = require('../src/XmlParser');

test('parseXML should correctly parse subdomains and cookies', async () => {
    const sampleXML = `...`; // Your sample XML here
    const { subdomains, cookies } = await parseXML(sampleXML);

    expect(subdomains.length).toBe(40);
    expect(cookies['cookie:dlp-avast:amazon']).toBe('mmm_amz_dlp_777_ppc_m');
});
