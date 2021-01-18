import Layout from '../Layout'
import { useTranslation } from 'react-i18next'
import useGotoStep from '../../hooks/useGoToStep'
import { useSelector } from 'react-redux'
import successImg from './success.jpg'
import failureImg from './failure.jpg'
import './index.scss'
import Dialog from './Dialog'

const StepThree = () => {
    const { t } = useTranslation()

    let { requestStatus } = useSelector(({ app }) => app)
    requestStatus = requestStatus === 200
    const goTo = useGotoStep()

    return (
        <Layout
            title={t('stepThree.title')}
            nextStep={() => goTo(1)}
            nextButtonText={`${
                requestStatus
                    ? t('stepThree.buttonText1')
                    : t('stepThree.buttonText2')
            }`}
            prevButtonType="hidden"
            nextButtonType="terciary"
        >
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
        </Layout>
    )
}

export default StepThree
