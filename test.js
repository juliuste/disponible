'use strict'

const tape = require('tape')
const disponible = require('./index')

tape('disponible', (t) => {
	t.plan(12)
	const domains = ['denic.de', 'definitelynotdenic.eu']
	disponible(domains)
	.on('error', (err) => {throw new Error(err)})
	.on('data', (data) => {
		t.ok(domains.indexOf(data.domain) >= 0, 'denic.de domain')
		if(data.domain === 'denic.de'){
			t.ok(data.level.top === 'de', 'denic.de level.top')
			t.ok(data.level.second === 'denic', 'denic.de level.second')
			t.ok(data.status === 'registered', 'denic.de status')
			t.ok(data.price.registration > 0, 'denic.de price.registration')
			t.ok(data.price.recurring > 0, 'denic.de price.recurring')
		}
		if(data.domain === 'definitelynotdenic.eu'){
			t.ok(data.level.top === 'eu', 'definitelynotdenic.eu level.top')
			t.ok(data.level.second === 'definitelynotdenic', 'definitelynotdenic.eu level.second')
			t.ok(data.status === 'avail', 'definitelynotdenic.eu status')
			t.ok(data.price.registration > 0, 'definitelynotdenic.eu price.registration')
			t.ok(data.price.recurring > 0, 'definitelynotdenic.eu price.recurring')
		}
	})
})
