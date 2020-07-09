import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// our example of Redux bindCreators func
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// works built-in bindActionCreators in Redux
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc);
document
    .getElementById('dec')
    .addEventListener('click', dec);
document
    .getElementById('rnd')
    .addEventListener('click', () => {
      const payload = Math.floor(Math.random() * 10);
      rnd(payload);
    });

    const update = () => {
      document
        .getElementById('counter')
        .innerHTML = store.getState();
    };

    store.subscribe(update);