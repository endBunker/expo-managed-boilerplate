import React from 'react'
import { render } from '@testing-library/react-native'

import { Home } from './Home'

describe('Home', () => {
  it('Welcome', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('welcome')).toHaveTextContent('Welcome')
  })
})
