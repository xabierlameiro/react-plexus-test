import PropTypes from 'prop-types'
import { AiOutlineCheck } from 'react-icons/ai'

const Steps = ({ steps, active }) => {
    return Array.from(Array(steps), (_e, i) => {
        i += 1
        return (
            <li className={`step ${i === active && 'step--select'}`} key={i}>
                {i < active ? <AiOutlineCheck size={12} /> : i}
            </li>
        )
    })
}

Steps.propTypes = {
    steps: PropTypes.number,
    active: PropTypes.number,
}

export default Steps
