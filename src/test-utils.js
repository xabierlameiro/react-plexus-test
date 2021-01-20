import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'
import store from './redux'
import i18n from './i18n'

const AllTheProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </Provider>
    )
}

AllTheProviders.propTypes = {
    children: PropTypes.object,
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
