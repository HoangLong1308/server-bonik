import PropTypes from 'prop-types';
import axios from 'axios.js';
export const LIST_PRODUCTS = 'listProducts';
export const STATUS_DISABLE = 'statusDisable';
export const LIST_PRODUCT_VARIANT = 'listProductVariant';
export const CHANGE_STATE_TABLE = 'changeStateTable';
export const DELETE_PRODUCT = 'deleteProduct';
export const GET_PRODUCT_BYID = 'getProductById';
export const PUT_PRODUCT = 'putProduct';
export const POST_PRODUCT = 'postProduct';
export const getProductsList = (size, page) => (dispatch) => {
    axios
        .get(
            process.env.REACT_APP_BASE_URL +
                'product?size=' +
                size +
                '&page=' +
                page,
        )
        .then((res) => {
            dispatch({
                type: LIST_PRODUCTS,
                payload: res.data.data,
            });
        });
};
export const getProductById = (id) => (dispatch) => {
    axios.get(process.env.REACT_APP_BASE_URL + 'product/' + id).then((res) =>
        dispatch({
            type: GET_PRODUCT_BYID,
            payload: res.data,
        }),
    );
};
export const deleteProduct = (id, isDelted) => (dispatch) => {
    axios
        .delete(
            process.env.REACT_APP_BASE_URL + 'product/' + id + '/' + isDelted,
        )
        .then(() => {
            dispatch({
                type: DELETE_PRODUCT,
            });
        });
};
export const putProduct = (product) => (dispatch) => {
    axios
        .put(
            process.env.REACT_APP_BASE_URL + 'product/',

            product,
        )
        .then((res) => {
            dispatch({
                type: PUT_PRODUCT,
                payload: res.data,
            });
        });
};
export const postProduct = (product) => (dispatch) => {
    axios
        .post(
            process.env.REACT_APP_BASE_URL + 'product',

            product,
        )
        .then((res) => {
            dispatch({
                type: POST_PRODUCT,
                payload: res.data,
            });
        });
};
export const StatusDisable = (bool) => {
    return {
        type: STATUS_DISABLE,
        payload: bool,
    };
};
export const getProductVariant = (size, page, id) => (dispatch) => {
    axios
        .get(
            process.env.REACT_APP_BASE_URL +
                'product-variant/' +
                id +
                '?size=' +
                size +
                '&page=' +
                page,
        )
        .then((res) => {
            dispatch({
                type: LIST_PRODUCT_VARIANT,
                payload: res.data,
            });
        });
};
export const changeStateTable = (state) => {
    return {
        type: CHANGE_STATE_TABLE,
        payload: state,
    };
};
getProductsList.propTypes = {
    size: PropTypes.number,
    page: PropTypes.number,
};