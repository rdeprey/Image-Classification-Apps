import React from 'react';
import classNames from 'classnames';
import './Button.scss';

export default function Button(props) {
    const {
        classes,
        children,
        ...rest
    } = props;

    const buttonClasses = classNames(
        'button',
        classes,
    );

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    );
}