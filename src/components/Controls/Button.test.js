import { cleanup, render } from 'test-utils'
import Button from './Button'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<Button />, div)
})

it('renders button correctly', () => {
    const { getByTestId } = render(
        <Button data-testid="button" text="Click me" />
    )
    expect(getByTestId('button')).toHaveTextContent('Click me')
})

it('matches snapshot', () => {
    const tree = renderer
        .create(
            <Button data-testid="button" classes="terciary" text="Click me" />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
