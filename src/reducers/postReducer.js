import {  message } from 'antd';
const initialState = {
    items:[],
    item:{},
    loading: false,
    visible: false,
    btnLoader: false
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
                ...state,
                btnLoader: true
            }
        case "NEW_POST_FULFILLED":
            return{
                ...state,
                item: action.payload.data,
                visible: false,
                btnLoader: false,
                msg: message.success('New post added successfully')
            }
        case "VISIBLE":
            return{
                ...state,
                visible: action.payload.visible
            }
        default:
            return state;
    }
}