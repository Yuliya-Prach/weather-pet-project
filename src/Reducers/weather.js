const weather = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather: action.data
            };
        case 'SET_ICON':
            return {
                ...state,
                icon: action.icon
            };
        default:
            return state;
    }
};
export default weather;
