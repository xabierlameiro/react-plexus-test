import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Steps from './Steps'
import './index.scss'

const BreadCrumb = ({ classes }) => {
    const { totalSteps, currentStep } = useSelector(({ app }) => app)

    return (
        <nav className={classes}>
            <ul>
                <Steps
                    classes={classes}
                    steps={totalSteps}
                    active={currentStep}
                />
            </ul>
        </nav>
    )
}

BreadCrumb.propTypes = {
    classes: PropTypes.string,
}

export default BreadCrumb
