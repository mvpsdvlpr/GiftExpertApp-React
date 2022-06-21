import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    // Cada componente puede tener sus propios estados
    const [InputValue, setInputValue] = useState('');


    /**
     * `onInputChange` is a function that takes an object as an argument, and then sets the input value to
     * the target's value.
     */
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    /**
     * When the user submits the form, prevent the default action, check if the input value is empty, if
     * it's not, add the input value to the categories array and reset the input value.
     * @returns The return is the JSX code that will be rendered in the DOM.
     */
    const onSubmit = (event) => {
        event.preventDefault();
        if (InputValue.trim().length <= 1) return; // condicion no permite realizar inserciones en blanco

        //setCategories(categories => [InputValue, ...categories]); // insertamos un nuevo valor en nuestras categorias
        onNewCategory(InputValue.trim());
        setInputValue('');
    };


    return (
        <form onSubmit={(event) => { onSubmit(event); }}>
            <input
                type="text"
                placeholder="Buscar Gifs...."
                value={InputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    );
};