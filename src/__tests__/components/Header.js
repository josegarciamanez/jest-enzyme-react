import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

describe('Header works with a correct text', () => {
    it('works', () => {
        const component = shallow(<Header />)
        expect(component.text()).toBe('Desde Header')
    })
})
