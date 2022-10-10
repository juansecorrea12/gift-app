import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {

    const[inputValue, setinputValue] = useState([]);

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
        <form onSubmit={onSubmit} className="form-container">
            <label 
                htmlFor="categoryName">
                Añade una categoria
            </label>
            <input 
                placeholder="Buscar Gift"
                value={inputValue}
                onChange = {handleInputChange} />
        </form>
        </>
    )
}