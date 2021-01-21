import { forwardRef, useRef, useImperativeHandle } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { validationForm } from '../../redux/ducks/app'
import { useDispatch } from 'react-redux'
import Password from './Password'
import Track from './Track'
import './index.scss'

const StepTwo = forwardRef((props, ref) => {
    const { register, handleSubmit, watch, errors } = useForm()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const password = useRef({})
    password.current = watch('password', '')

    useImperativeHandle(ref, () =>
        handleSubmit(({ password }) => {
            dispatch(validationForm(password))
        })
    )

    return (
        <section className="step__two">
            <form>
                <fieldset>
                    <legend>
                        {t('stepTwo.paragraph1')}
                        <br />
                        {t('stepTwo.paragraph2')}
                    </legend>
                    <Password
                        label={t('stepTwo.label1')}
                        placeholder={t('stepTwo.password')}
                        name="password"
                        register={register}
                        errors={errors}
                        regexp={process.env.REACT_APP_REGEXP_PASS}
                    />
                    <Password
                        label={t('stepTwo.repeatPassword')}
                        placeholder={t('stepTwo.repeatPassword')}
                        name="repeatPassword"
                        register={register}
                        errors={errors}
                        regexp={process.env.REACT_APP_REGEXP_PASS}
                        extraValidations={{
                            validate: (value) =>
                                value === password.current ||
                                t('stepTwo.match'),
                        }}
                    />
                </fieldset>
                <fieldset>
                    <legend>{t('stepTwo.paragraph3')}</legend>
                    <Track
                        label={t('stepTwo.label2')}
                        placeholder={t('stepTwo.track')}
                        name="track"
                        register={register}
                        errors={errors}
                        watch={watch}
                    />
                </fieldset>
            </form>
        </section>
    )
})

export default StepTwo
