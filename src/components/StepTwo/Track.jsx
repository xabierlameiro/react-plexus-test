import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Track = ({ name, label, errors, register, placeholder, watch }) => {
    const { t } = useTranslation()

    return (
        <label htmlFor={name}>
            <p>
                {label}
                <AiOutlineInfoCircle
                    cursor="pointer"
                    size={20}
                    color="var(--aquamarine)"
                />
            </p>
            <div>
                <input
                    ref={register({
                        maxLength: {
                            value: 255,
                            message: t('stepTwo.max255'),
                        },
                    })}
                    placeholder={placeholder}
                    type="text"
                    data-testid={name}
                    id={name}
                    name={name}
                />
                <span className="counter" data-testid="counter">
                    {watch('track')?.length || 0}/255
                </span>
            </div>
            {errors?.[name] && (
                <span className="errors">{errors?.[name].message}</span>
            )}
        </label>
    )
}

Track.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errors: PropTypes.object,
    register: PropTypes.func,
    placeholder: PropTypes.string,
    watch: PropTypes.func,
}

export default Track
