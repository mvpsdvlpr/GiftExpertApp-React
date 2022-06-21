import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    /* A destructuring assignment. */
    const [categories, setCategories] = useState(['']); //inicializado como un arreglo, con un elemento

    /**
     * When the user clicks the button, add a new category to the list of categories.
     */
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories,]);
    };


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => { onAddCategory(event); }} />
            {
                /* Iterating over the array of categories and returning a list item for each
                category. */
                categories.map((category) => {
                    return (
                        <GifGrid key={category} category={category} />
                    );
                })
            }
        </>
    );
};
