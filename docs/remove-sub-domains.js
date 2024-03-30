// And support localhost
// host: example.com:8080
// hostname: example.com
const host = window.location.hostname.split('.')
const domain = host.length > 1 ? host.slice(-2).join('.') : host[0]
