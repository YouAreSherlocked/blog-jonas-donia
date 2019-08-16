import actions from './actions';

const changeCurrentCountry = name => dispatch => {
    dispatch(actions.changeCurrentCountry(name));
}

export default {
    changeCurrentCountry
};