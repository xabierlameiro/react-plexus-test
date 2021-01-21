/* eslint-disable no-unused-vars */
import { cleanup, render, screen, fireEvent } from 'test-utils'
import Switch from './index'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'

afterEach(cleanup)

test('Testing Switch component with the app steps and navigate between own steps', () => {
    const { container, debug } = render(
        <Switch>
            <StepOne title="My step one" />
            <StepTwo title="My step two" />
            <StepThree
                title="My step three"
                prevButtonType="hidden"
                nextButtonType="terciary"
            />
        </Switch>
    )
    const title = screen.getByTestId('header__title')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('My step one')

    expect(screen.getByTestId('step--select')).toHaveTextContent('1')

    const prevButton = screen.getByTestId('prev')
    const nextButton = screen.getByTestId('next')

    fireEvent.click(screen.getByTestId('checkbox-lodp'))
    fireEvent.click(nextButton)

    //debug()

    expect(title).toHaveTextContent('My step two')
    expect(screen.getByTestId('step--select')).toHaveTextContent('2')

    fireEvent.click(nextButton)

    expect(title).toHaveTextContent('My step three')
    expect(screen.getByTestId('step--select')).toHaveTextContent('3')

    //debug()

    expect(screen.getByTestId('feedback-title')).toHaveTextContent(
        'Ha habido un error'
    )
    expect(screen.getByTestId('feedback-message')).toHaveTextContent(
        'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.'
    )

    fireEvent.click(nextButton)

    expect(title).toHaveTextContent('My step one')
    expect(screen.getByTestId('step--select')).toHaveTextContent('1')

    fireEvent.click(screen.getByTestId('checkbox-lodp'))
    fireEvent.click(nextButton)

    expect(title).toHaveTextContent('My step two')
    expect(screen.getByTestId('step--select')).toHaveTextContent('2')

    fireEvent.click(prevButton)

    expect(title).toHaveTextContent('My step one')
    expect(screen.getByTestId('step--select')).toHaveTextContent('1')
})
