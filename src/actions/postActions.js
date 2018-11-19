import Axios from 'axios';

export const fetchPosts = () => dispatch => {
    return dispatch({
        type: "FETCH_POSTS",
        payload: Axios.get('https://jsonplaceholder.typicode.com/posts')
    });
};

export const createPost = (postData) => dispatch => {
    return dispatch({
        type: "NEW_POST",
        payload: Axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(postData)
        })
    });
};

/*
export const createPost = postData => dispatch => {
    Axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(postData)
    })
    .then(({data: post}) =>
        dispatch({
            type: "NEW_POST",
            payload: post
        }),
    );

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(postData)
    // })
    //     .then(res => res.json())
    //     .then(post =>
    //         dispatch({
    //             type: "NEW_POST",
    //             payload: post
    //         })
    //     );
};
*/

























// export default function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => 
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             })
//         );
//     }
// };