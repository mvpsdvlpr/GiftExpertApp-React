import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifgridItem } from "./GifgridItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log({ images, isLoading });


    return (
        <>
            <h3>{category}</h3>

            {/* Formas conocidas */}
            {/* {isLoading ? (<h2 className={isLoading}>Cargando....</h2>) : null} */}

            {
                isLoading && (<h2>Cargando....</h2>)
            }


            <div className="card-grid">
                {
                    images.map((image) => {
                        return (
                            // forma 1
                            // <GifgridItem
                            //     key={id}
                            //     title={title}
                            //     url={url}
                            // />

                            //Forma 2 
                            <GifgridItem
                                key={image.id}
                                {...image}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};
