import Track from './Track'
import '@testing-library/jest-dom/extend-expect'
import i18n from '../../i18n'
import { I18nextProvider } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { renderHook } from '@testing-library/react-hooks'
import { render, cleanup, fireEvent } from '@testing-library/react'

afterEach(cleanup)

it('displays the counter & fire changes input', () => {
    const { result } = renderHook(() => useForm())

    const { getByTestId } = render(
        <I18nextProvider i18n={i18n}>
            <Track
                errors={result.current.errors}
                watch={result.current.watch}
                register={result.current.register}
                placeholder="Máximo 255 caracteres"
                name="track"
                label="Introduce tu pista"
            />
        </I18nextProvider>
    )

    const input = getByTestId('track')

    fireEvent.change(input, {
        target: { value: 'Esta es mi pista' },
    })

    expect(input.value).toBe('Esta es mi pista')

    expect(result.current.watch('track')?.length).toBe(16)

    expect(getByTestId('counter')).toHaveTextContent('0/255')
})
