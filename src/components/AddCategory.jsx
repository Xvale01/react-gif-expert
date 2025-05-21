import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => { 
        //setInputValue(event.target.value); sin la desestructuracion del event
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //se utiliza para prevenir la recarga por defecto la etiqueta form
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit ={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

//cada componente puede tener su propio estado, es decir sus propios hooks

