import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGif( category );

    return(
        <>
            <div className="category-element">
                <h1 className="category-name">{category}</h1>
                    {
                        isLoading && (<h2>Cargando...</h2>)
                    }
                <div className="card-grid">
                    {
                        images.map((image) => (
                            <GifGridItem 
                            key={image.id} 
                            { ...image } />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
