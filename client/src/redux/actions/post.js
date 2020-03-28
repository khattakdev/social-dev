import axios from '../../axios'

export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_FAILED = "LOAD_POSTS_FAILED";


export const loadPosts = () => dispatch => {
    axios.get('post/getall').then(res => {
        alert("Posts Loaded");
        dispatch({
            type: LOAD_POSTS
        })
    }).catch(err => {

    })
}