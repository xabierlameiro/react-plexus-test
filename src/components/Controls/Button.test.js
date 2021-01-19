import Button from './Button'
import '@testing-library/jest-dom/extend-expect'

import { render, cleanup } from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<Button />, div)
})

it('renders button correctly', () => {
    const { getByTestId } = render(<Button text="Click me" />)
    expect(getByTestId('button')).toHaveTextContent('Click me')
})

it('matches snapshot', () => {
    const tree = renderer
        .create(<Button classes="terciary" text="Click me" />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
