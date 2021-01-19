import Layout from '../Layout'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotalSteops } from '../../redux/ducks/app'

const Swith = ({ children }) => {
    const dispatch = useDispatch()

    const { currentStep } = useSelector((state) => state.app)

    const Component = children.filter(
        (_child, index) => index + 1 === currentStep
    )[0]

    useEffect(() => {
        dispatch(updateTotalSteops(children.length))
    }, [Component])

    return (
        <Layout {...Component?.props} customNext={Component?.ref?.current}>
            <>{Component}</>
        </Layout>
    )
}

Swith.propTypes = {
    children: PropTypes.array.isRequired,
}

export default Swith
