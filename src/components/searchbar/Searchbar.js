import React, {useState} from "react";
import style from "./Searchbar.module.css";
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        const {value} = e.target;
        setInputValue(value.toLowerCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            alert("Введите название изображения")
            return;
        }

        onSubmit(inputValue);
        setInputValue('');
    }

    return (
        <header className={style.Searchbar}>
            <form onSubmit={handleSubmit} className={style.SearchForm}>
                <button type="submit" className={style.SearchFormButton}>
                    <span className={style.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={style.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInput}
                    value={inputValue}
                />
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
