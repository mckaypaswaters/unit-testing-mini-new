import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'
import { get } from 'http'

it('Renders out starting text', () => {
    const {container} = render(<Counter/>)
    expect(container.textContent).toContain(`You've clicked 0 times!`)
})
it('Clicking increments state count', () => {
    // 1. Render out counter. Destructure container and getByTestId
    const {container, getByTestId} = render(<Counter/>)
    // 2. Check for starting text of paragraph tag
    expect(container.textContent).toContain(`You've clicked 0 times!`)
    // 3. use fireEvent method along with getByTestId to fire off click event on button
    fireEvent.click(getByTestId('counter-button'))
    // 4. After firing click event, check textContent to make sure count incrememnted by 1
    expect(container.textContent).toContain(`You've clicked 1 times!`)
})