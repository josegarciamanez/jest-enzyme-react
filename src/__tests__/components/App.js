import React from 'react'
import { shallow } from 'enzyme'
import App from '../../App'
describe('should render app without crash', () => {
    it('Render without crashing ', () => {
        shallow(<App />)
    })
})
