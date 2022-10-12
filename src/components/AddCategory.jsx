import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const[inputValue, setinputValue] = useState('');

    const handleInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        onNewCategory(newInputValue)
        setinputValue('');
    }
    return(
        <>
        <form onSubmit={onSubmit} className="form-container" aria-label="form">
            <label 
                htmlFor="categoryName">
                Añade una categoria
            </label>
            <input 
                placeholder="Buscar Gift"
                type="text"
                value={inputValue}
                onChange = {handleInputChange} />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}