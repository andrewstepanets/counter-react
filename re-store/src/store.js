// import { createStore, compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';



const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
};

// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {

//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             });
//         }
//         return originalDispatch(action);
//     };
//     return store;
// };

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {

//         console.log(action.type);
        
//         return originalDispatch(action);
//     };
//     return store;
// };


// run this func when we use enhancer func
// const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));

// const myAction = (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION'
//     }), 2000)
// }; 
// store.dispatch(myAction);
const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}; 

store.dispatch(delayedActionCreator(3000));
// store.dispatch('HELLO_WORLD');

export default store;