import PropTypes from 'prop-types'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import { MdNavigateNext } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Controls = ({
    prevStep,
    nextStep,
    prevButtonType,
    nextButtonType,
    prevButtonText,
    nextButtonText,
}) => {
    const { lopd } = useSelector((state) => state.app)
    const { t } = useTranslation()

    return (
        <>
            <Button
                handler={prevStep}
                classes={prevButtonType}
                text={prevButtonText || t('buttons.cancel')}
            />

            <Button
                handler={nextStep}
                disabled={lopd}
                classes={nextButtonType}
                text={nextButtonText || t('buttons.next')}
                icon={<MdNavigateNext size={25} />}
            />
        </>
    )
}
Controls.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    prevButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    prevButtonType: PropTypes.string,
    nextButtonType: PropTypes.string,
}

Controls.defaultProps = {
    prevButtonType: 'secondary',
    nextButtonType: 'primary',
}

export default Controls
