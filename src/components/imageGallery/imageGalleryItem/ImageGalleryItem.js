import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({src, alt, modalUrl, onClickCurrentImage}) => {

    const setLargeImage = () => onClickCurrentImage(modalUrl);

    return (
        <>
            <li className={style.ImageGalleryItem}>
                <img
                    src={src}
                    alt={alt}
                    className={style.ImageGalleryItemImage}
                    onClick={setLargeImage}
                />
            </li>
        </>
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    modalUrl: PropTypes.string.isRequired,
    onClickCurrentImage: PropTypes.func.isRequired,
}

export default ImageGalleryItem