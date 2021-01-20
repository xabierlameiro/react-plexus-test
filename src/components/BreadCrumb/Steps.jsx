import PropTypes from 'prop-types'
import { AiOutlineCheck } from 'react-icons/ai'

const Steps = ({ steps, active }) => {
    return Array.from(Array(steps), (_e, i) => {
        i += 1
        const isSelected = i === active
        const props = {
            key: i,
            className: `step${isSelected ? ' step--select' : ''}`,
            ...(isSelected && { 'data-testid': 'step--select' }),
        }
        return (
            <li {...props}>{i < active ? <AiOutlineCheck size={12} /> : i}</li>
        )
    })
}

Steps.propTypes = {
    steps: PropTypes.number,
    active: PropTypes.number,
}

export default Steps
