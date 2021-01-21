import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { BsEye } from 'react-icons/bs'

const Password = ({
    name,
    label,
    extraValidations,
    errors,
    regexp,
    register,
    placeholder,
}) => {
    const { t } = useTranslation()

    return (
        <label htmlFor={name}>
            {label}
            <div>
                <input
                    ref={register({
                        minLength: {
                            value: 8,
                            message: t('stepTwo.minLength'),
                        },
                        maxLength: {
                            value: 24,
                            message: t('stepTwo.maxLength'),
                        },
                        pattern: {
                            value: new RegExp(regexp),
                            message: t('stepTwo.pattern'),
                        },
                        required: {
                            value: true,
                            message: t('stepTwo.required'),
                        },
                        ...extraValidations,
                    })}
                    autoComplete="off"
                    placeholder={placeholder}
                    data-testid={name}
                    name={name}
                    id={name}
                    type="password"
                    onMouseEnter={(e) => (e.target.type = 'text')}
                    onMouseLeave={(e) => (e.target.type = 'password')}
                />
                <BsEye className="showMePass" size={25} />
            </div>
            {errors?.[name] && (
                <span className="errors">{errors?.[name].message}</span>
            )}
        </label>
    )
}

Password.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    extraValidations: PropTypes.object,
    errors: PropTypes.object,
    regexp: PropTypes.string.isRequired,
    register: PropTypes.func,
    placeholder: PropTypes.string,
}

export default Password
