import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { changeLopdValue } from '../../redux/ducks/app'
import useGotoStep from '../../hooks/useGoToStep'
import image from './image_one.jpg'
import image2 from './image_two.jpg'
import Layout from '../Layout'
import './index.scss'

const StepOne = () => {
    const dispatch = useDispatch()
    const goTo = useGotoStep()
    const { lopd } = useSelector((state) => state.app)
    const { t } = useTranslation()

    return (
        <Layout
            title={t('stepOne.title')}
            prevStep={() => goTo(1)}
            nextStep={() => goTo(2)}
        >
            <section className="step__one">
                <div className="app__images">
                    <div>
                        <img src={image} alt="" />
                        <p>{t('stepOne.paragraph1')}</p>
                    </div>
                    <div>
                        <img src={image2} alt="" />
                        <p>{t('stepOne.paragraph2')}</p>
                    </div>
                </div>
                <div className="app__description">
                    <h2>{t('stepOne.title2')}</h2>
                    <p>{t('stepOne.paragraph3')}</p>
                    <h2>{t('stepOne.title3')}</h2>
                    <p>{t('stepOne.paragraph4')}</p>
                </div>
                <div className="app__confirmation">
                    <label htmlFor="lopd">
                        <input
                            type="checkbox"
                            name="lopd"
                            id="lopd"
                            checked={lopd}
                            onChange={(e) =>
                                dispatch(changeLopdValue(e.target.checked))
                            }
                        />
                        <p>{t('stepOne.confirmation')}</p>
                    </label>
                </div>
            </section>
        </Layout>
    )
}

export default StepOne
