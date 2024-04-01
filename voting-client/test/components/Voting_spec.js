import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Voting from '../../src/components/Voting'

describe('Voting', () => {
    it('renders a pari of buttons', () => {
        render(
            <Voting pair={['Trainspotting', '28 Days Later']} />
        )
    })
})