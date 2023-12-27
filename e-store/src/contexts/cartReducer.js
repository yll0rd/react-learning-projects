export const CartReducer = (state, action) => {
    // eslint-disable-next-line no-debugger
    debugger;
    let index = -1
    if (action.payload)
        index = state.cartItems.findIndex(x => x.id === action.payload.id)
    switch (action.type) {
        case "INCQTY":
        case "ADD": {
            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
            } else {
                state.cartItems[index].quantity += 1;
            }
            break;
        }
        case "REMOVE": {
            if (index > -1)
                state.cartItems.splice(index, 1);
            break;
        }
        case "DECQTY": {
            if (index > -1)
                state.cartItems[index].quantity -= 1;
            break;
        }
        case "CLEAR": {
            state.cartItems = [];
            break;
        }
        default: {}
    }
    return state;
}