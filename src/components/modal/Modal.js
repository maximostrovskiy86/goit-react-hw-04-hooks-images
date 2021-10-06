import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import style from "./Modal.module.css";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {

    useEffect(() => {
        window.addEventListener("keydown", onCLoseModal);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onCLoseModal);
            const body = document.querySelector("body");
            body.style.overflow = "auto";
        };
    });

    const onCLoseModal = (e) => {
        if (e.code === 'Escape') {
            onClose();
        }
    }

    const onOverlayClose = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
        <div className={style.Overlay} onClick={onOverlayClose}>
            <div className={style.Modal}>
                {children}
            </div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default Modal;