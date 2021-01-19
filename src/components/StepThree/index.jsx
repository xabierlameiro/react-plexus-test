import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import successImg from './success.jpg'
import failureImg from './failure.jpg'
import './index.scss'
import Dialog from './Dialog'

const StepThree = () => {
    const { t } = useTranslation()

    let { requestStatus } = useSelector(({ app }) => app)
    requestStatus = requestStatus === 200

    return (
        <section className="step__three">
            {requestStatus ? (
                <Dialog
                    img={successImg}
                    title={t('stepThree.successTitle')}
                    message={t('stepThree.successMessage')}
                />
            ) : (
                <Dialog
                    img={failureImg}
                    title={t('stepThree.failureTitle')}
                    message={t('stepThree.failureMessage')}
                />
            )}
        </section>
    )
}

export default StepThree
