var host = process.env.DHIS_HOST;
var port = process.env.DHIS_PORT;

if (typeof host == 'undefined' || !host) {
    host = 'localhost'
}
if (typeof port == 'undefined' || !port) {
    port = 8085
}

module.exports = {
    url: "http://" + host + ":" + port,
    api: '/api/',
    api23: '/api/23/',
    auth: {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Basic YWRtaW46ZGlzdHJpY3Q='
        }
    },
    authXML: {
        headers: {
            Accept: 'application/xml',
            Authorization: 'Basic YWRtaW46ZGlzdHJpY3Q='
        }
    }
};