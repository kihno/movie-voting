import {expect} from 'chai'
import pkg from 'immutable'
const { fromJS, Map } = pkg

import makeStore from '../src/store.js'

describe('store', () => {

    it('is a Redux store conifgured with the correct reducer', () => {
        const store = makeStore()
        expect(store.getState()).to.equal(Map())

        store.dispatch({
            type: 'SET_ENTRIES',
            entries: ['Trainspotting', '28 Days Later']
        })

        expect(store.getState()).to.equal(fromJS({
            entries: ['Trainspotting', '28 Days Later']
        }))
    })
})