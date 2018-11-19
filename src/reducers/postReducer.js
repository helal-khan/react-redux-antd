const initialState = {
    items:[],
    item:{},
    loading: false,
    showModal: false
}

export default function(state = initialState, action){
    switch(action.type){
        case "FETCH_POSTS_PENDING":
            return{
                ...state,
                loading: true
            }
        case "FETCH_POSTS_FULFILLED":
            return{
                ...state,
                loading: false,
                items: action.payload.data
            }
        case "NEW_POST_PENDING":
            return{
                ...state
            }
        case "NEW_POST_FULFILLED":
            return{
                ...state,
                item: action.payload.data
            }
        default:
            return state;
    }
}