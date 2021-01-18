import PropTypes from 'prop-types'
import successImg from './success.png'
import errorImg from './error.png'

const Step3 = ({ success }) => {
    return <img src={success ? successImg : errorImg} />
}

Step3.propTypes = {
    success: PropTypes.bool,
}

export default Step3
