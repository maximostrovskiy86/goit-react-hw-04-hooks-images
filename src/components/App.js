import React, {useState} from "react";
import style from "./App.module.css";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";

const App = () => {
    const [value, setValue] = useState('');

    const handleFormSearch = (searchQuery) => {
        setValue(searchQuery)
    }

    return (
        <div className={style.App}>
            <Searchbar onSubmit={handleFormSearch}/>
            <ImageGallery inputValue={value}/>
        </div>
    );
}

export default App;
