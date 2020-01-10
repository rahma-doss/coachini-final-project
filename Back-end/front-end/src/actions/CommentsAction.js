import {ADD_COMMENT} from './types'


export const CommentsAdd = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment,
    };
}