// eslint-disable-next-line no-unused-vars
import {USER_SELECTED} from '../actions/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null, action){

    // eslint-disable-next-line default-case
    switch(action.type){
        case USER_SELECTED: return action.payload
        // eslint-disable-next-line no-unreachable
        break;
    }

    return state
}