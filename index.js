'use strict'

const evs = require('event-source-stream')
const filter = require('through2-filter').obj
const map = require('through2-map').obj

const endpoint = 'https://www.united-domains.de/domains/availability'

const transformDomain = (d) => {
    const domain = Object.keys(d)[0]
    return ({
        domain,
        level: {
            top: d[domain].tld_name,
            second: d[domain].base_name
        },
        status: d[domain].status,
        price: {
            registration: d[domain].registration_price,
            registrationPromo: d[domain].promo_registration_price || false,
            recurring: d[domain].recurring_price
        }
    })
}

const domains = (list) =>
    evs(`${endpoint}?d=${list.join(',')}`, {retry: false})
    .pipe(map((o) => JSON.parse(o)))
    .pipe(filter((o) => !o.action))
    .pipe(map(transformDomain))

module.exports = domains
