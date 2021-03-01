import { act } from "react-test-renderer";

const initialState = {
    name: 'James',
    age: 12,
    occupation: '',
    location: '',
    technology: ''
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            console.log('===>', action.payload);
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
    console.log('+++++', state.name);
};

export default infoReducer;