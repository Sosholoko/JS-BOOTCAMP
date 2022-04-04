let initState = {
    prop_1: 'text one',
    prop_2: 'text two'
}

export const reducer = (state = initState, action) =>{
    switch (action.type) {
        case 'PROP_ONE':
            return{...state, prop_1: action.payload}
        case 'PROP_TWO':
            return{...state, prop_2: action.payload}
        default:
            return {...state}
    }
};