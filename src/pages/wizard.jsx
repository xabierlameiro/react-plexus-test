import { useRef } from 'react'
import Switch from '../components/Switch'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const Wizard = () => {
    const { t } = useTranslation()
    const childRef = useRef()
    const { requestStatus } = useSelector((state) => state.app)

    return (
        <section className="page">
            <div className="container">
                <Switch>
                    <StepOne title={t('stepOne.title')} />
                    <StepTwo ref={childRef} title={t('stepTwo.title')} />
                    <StepThree
                        title={t('stepThree.title')}
                        nextButtonText={`${
                            requestStatus === 200
                                ? t('stepThree.buttonText1')
                                : t('stepThree.buttonText2')
                        }`}
                        prevButtonType="hidden"
                        nextButtonType="terciary"
                    />
                </Switch>
            </div>
        </section>
    )
}

export default Wizard
