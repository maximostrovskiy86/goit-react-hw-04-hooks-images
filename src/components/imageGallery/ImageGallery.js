import React, {useState, useEffect} from "react";
import style from "./ImageGallery.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import imagesApi from "../../services/Api";
import Loader from "react-loader-spinner";

const ImageGallery = ({inputValue}) => {

    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [largeImg, setLargeImg] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getImages = (inputValue, page) => {

        (!page ?
                imagesApi
                    .fetchQueryApi(inputValue) :
                imagesApi
                    .fetchLoadMore(inputValue, page)
        )

            .then(gallery => !page ?
                ((setGallery(gallery.hits),
                    setPage(1)))
                : setGallery(prevState => [...prevState, ...gallery.hits])
            )

            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            })
    }

    useEffect(() => {
        if (inputValue === '') {
            return;
        }
        setLoading(true);
        getImages(inputValue);
    }, [inputValue]);

    useEffect(() => {
        console.log('useEffect PAGE')
        if (page === 1) {
            return;
        }
        setLoading(true);
        getImages(inputValue, page);
    }, [page, inputValue]);


    const onLoadMore = () => {
        setPage(prev => {
            console.log(prev)
            return prev + 1;
        });
    }

    const toggleModal = () => {
        setShowModal(state => !state)
    }

    const findCurrentImages = (largeImg) => {
        setShowModal(prev => !prev);
        setLargeImg(largeImg);
    };

    return (
        <main className={style.main}>
            {error && <h2>Введите запрос ещё раз</h2>}
            <ul className={style.ImageGallery}>
                {gallery.map(image => <ImageGalleryItem
                        src={image.webformatURL}
                        alt={image.tags} key={image.id}
                        modalUrl={image.largeImageURL}
                        onClickCurrentImage={findCurrentImages}
                    />
                )}
            </ul>
            {loading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}
            {showModal && <Modal onClose={toggleModal}>
                <img src={largeImg} alt="Изображение"/>
            </Modal>}
            {gallery.length > 0 && <Button LoadMore={onLoadMore}/>}
        </main>
    );
}

ImageGallery.propTypes = {
    inputValue: PropTypes.string.isRequired,
}

export default ImageGallery;