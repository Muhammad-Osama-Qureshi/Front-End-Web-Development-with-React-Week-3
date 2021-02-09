import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../shared/Promotion'
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'


export const initialState = {
    dishes:DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS   
}

export const Reducer=(state=initialState,action)=>{
    return state;
}