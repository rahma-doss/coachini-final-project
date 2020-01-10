import { SET_SPECIALITE_FILTER } from './types';



export const specialiteFilter = newText => (
    {
        type: SET_SPECIALITE_FILTER,
        payload: newText,
    }
)


