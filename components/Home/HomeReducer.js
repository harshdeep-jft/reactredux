const initialState = {
    name: '',
    age: 0,
    salary: 0,
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default homeReducer;