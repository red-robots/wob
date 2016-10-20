/**
 * Created by fritz on 10/19/16.
 */
import axios from 'axios'

export function loadHeader() {
    return (dispatch) => {
        dispatch({type: "PENDING_HEADER"});
        axios.get(wobbegong.menu_api_root + "menus").then(function(result){
            var getId = ()=>{
                for(var i=0;i<result.data.length;i++){
                    if(result.data[i].name==="Primary"){
                        return result.data[i].ID;
                    }
                }
            }
            var id = getId();
            axios.get(wobbegong.menu_api_root+"menus/"+id).then(function(result){
                if(result.data.items){
                    dispatch({type: "RENDERED_HEADER_MENU",payload:result.data.items});
                } else {
                    dispatch({type: "404"});
                }
            }).catch(function(error){
                dispatch({type: "404"});
            });
        }).catch(function(error){
            dispatch({type: "404"});
        });
    }
}