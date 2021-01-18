import React from 'react'
import PropTypes from 'prop-types'

const Dialog = ({ img, title, message }) => {
    return (
        <dialog open>
            <div className="alert__description">
                <img src={img} alt={title} />
                <summary>
                    <h2>{title}</h2>
                    <p>{message}</p>
                </summary>
            </div>
        </dialog>
    )
}

Dialog.propTypes = {
    img: PropTypes.node,
    title: PropTypes.string,
    message: PropTypes.string,
}

export default Dialog
