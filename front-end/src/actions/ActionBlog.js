import {ADD_BLOG,DELETE,SEARCH,EDIT_BLOG} from './types';

export const add = (newBlog) => {
    return{
        type: ADD_BLOG,
        payload: newBlog,
    }
}
export const remove = (id) => {
    return{
        type: DELETE,
        payload: id,
    }
}

export const search = (filter) => {
    return{
        type: SEARCH,
        payload: filter
    }
}
export const editBlog = (blog) => {
    return{
        type: EDIT_BLOG,
        payload: blog
    }
}