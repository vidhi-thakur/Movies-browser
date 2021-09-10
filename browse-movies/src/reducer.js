export const initialState = {
    favourite: [],
    user: null
}

const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_FAVOURITE":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FAVOURITE":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => action.id === basketItem.id)

            if(index>=0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`The item with ${action.id} is not present in the basket`);
            }

            return {
                ...state,
                basket: newBasket
            }
    
        default:
            return state;
    }
}

export default reducer;