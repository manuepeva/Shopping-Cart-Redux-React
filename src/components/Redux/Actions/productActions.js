import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE
} from '../../Redux/types';

export const fetchProducts = () => async (dispatch) => {
    const result = await fetch("/api/products");
    const data = await result.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    })
};

export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "" ? products :
                products.filter(product => product.availableSizes.indexOf(size) >= 0),

        }
    })
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest" ?
                a.price > b.price ? 1 : -1
                :
                a.price > b.price ? -1 : 1
        )
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })
}