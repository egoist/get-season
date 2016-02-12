import test from 'ava'
import season from './'

test('main', t => {
	t.is(typeof season(), 'string')
	t.true(season(true).length < 3)
})
