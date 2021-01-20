import Layout from '../Layout'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotalSteps } from '../../redux/ducks/app'

const Switch = ({ children }) => {
    const { currentStep } = useSelector((state) => state.app)
    const [customHandler, setCustomHanlder] = useState(null)
    const dispatch = useDispatch()

    const Component = children?.filter(
        (_child, index) => index + 1 === currentStep
    )[0]

    useEffect(() => {
        dispatch(updateTotalSteps(children.length))
    }, [])

    useEffect(() => {
        setCustomHanlder(Component?.ref)
    }, [Component])

    return (
        <Layout {...Component?.props} customNext={customHandler?.current}>
            <>{Component}</>
        </Layout>
    )
}

Switch.propTypes = {
    children: PropTypes.array,
}

export default Switch
