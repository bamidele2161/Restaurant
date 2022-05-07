export const actionType = {
    SET_USER: 'SET_USER',
    SET_FOOT_ITEMS: 'SET_FOOD_ITEMS'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionType.SET_USER:
            return{
                ...state,
                user: action.user
            };
        case actionType.SET_FOOT_ITEMS:
            return{
                ...state,
                user: action.foodItems
            };
            default:
                return state;
    }
}



export default reducer;