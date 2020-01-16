import { GET_COACHS } from './types';
import axios from 'axios';

export const getCoachs = () => dispatch => {
    axios.get("/api/Coachs")
        .then(res => res.data)
        .then(coach => dispatch({
            type: GET_COACHS,
            payload: coach
        })
        )
}


