import actions from './actions';

const switchMode = mode => dispatch => {
    dispatch(actions.switchMode(mode));
}

export default {
    switchMode
};