import React from "react";
import style from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({LoadMore}) => {
    return (
        <button type="button" className={style.Button} onClick={LoadMore}>Load more</button>
    );
}

Button.propTypes = {
    LoadMore: PropTypes.func.isRequired,
}

export default Button;