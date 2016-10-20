/**
 * Created by fritz on 10/12/16.
 */
export default function (state ={
    posts: [],
    page: null,
    error: null,
    header: null,
    footer: null,
},action){
    switch(action.type){
        case "PENDING_POST": {
            return state;
            break;
        }
        case "PENDING_PAGE": {
            return Object.assign({}, state, {
                page: null,
            });
            break;
        }
        case "RENDERED_PAGE": {
            return Object.assign({}, state, {
                page: action.payload,
            });
            break;
        }
        case "RENDERED_POST": {
            var newState = Object.assign({}, state);
            newState.posts[action.payload.slug] = action.payload;
            return newState;
            break;
        }
        case "RENDERED_HEADER_MENU": {
            var newState = Object.assign({}, state);
            if(!newState.header){
                newState.header = {};
            }
            newState.header.menu = action.payload;
            return newState;
            break;
        }
        default: {
            return state;
            break;
        }
    }
}