import PropTypes from 'prop-types'
import Button from './Button'
import useGotoStep from '../../hooks/useGoToStep'
import { useTranslation } from 'react-i18next'
import { MdNavigateNext } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Controls = ({
    customPrev,
    customNext,
    prevButtonType,
    nextButtonType,
    prevButtonText,
    nextButtonText,
}) => {
    const { lopd } = useSelector((state) => state.app)
    const { t } = useTranslation()
    const { prevStep, nextStep } = useGotoStep()

    return (
        <>
            <Button
                data-testid="prev"
                handler={customPrev || prevStep}
                classes={prevButtonType}
                text={prevButtonText || t('buttons.cancel')}
            />

            <Button
                data-testid="next"
                handler={customNext || nextStep}
                disabled={lopd}
                classes={nextButtonType}
                text={nextButtonText || t('buttons.next')}
                icon={<MdNavigateNext size={25} />}
            />
        </>
    )
}
Controls.propTypes = {
    customPrev: PropTypes.func,
    customNext: PropTypes.func,
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
