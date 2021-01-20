import Layout from '../Layout'
import PropTypes from 'prop-types'
import { useEffect, useState, Children } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotalSteps } from '../../redux/ducks/app'

const Switch = ({ children }) => {
    const { currentStep } = useSelector((state) => state.app)
    const [customHandler, setCustomHanlder] = useState(null)
    const dispatch = useDispatch()
    const isArray = Children.count(children) > 1

    const Component = isArray
        ? children?.filter((_child, index) => index + 1 === currentStep)[0]
        : children

    useEffect(() => {
        dispatch(updateTotalSteps(isArray ? children?.length : 1))
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
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Switch
