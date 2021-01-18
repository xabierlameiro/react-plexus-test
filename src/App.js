import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import TestStatement from './pages/testStatement'
import Wizard from './pages/wizard'
import './App.scss'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <TestStatement />
                    </Route>
                    <Route exact path="/wizard">
                        <Wizard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
