export const CartReducer = (state, action) => {
    // eslint-disable-next-line no-debugger
    debugger;

    switch (action.type) {
        case "ADD": {
            let index = state.cartItems.findIndex(x => x.id === action.payload.id);
            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
            } else {
                state.cartItems[index].quantity += 1;
            }
            return state;
        }
        case "REMOVE":
        default:
            return state;
    }
}