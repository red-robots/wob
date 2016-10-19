/**
 * Created by fritz on 10/19/16.
 */
const load = (props,callback) => {
    var result = {
        success: -1,
        data: null
    };
    var url = wobbegong.api_root;
    if(props.slug){
        url+="posts/?slug=" + props.slug;
    } else {
        url+="posts/";
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            if (data.length >0) {
                result.data = data[0];
                result.success = 0;
                callback(result);
            } else {
                result.success = 2;
                callback(result);
            }
        } else if(xhttp.readyState == 4){
            result.success = 2;
            callback(result);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
export function loadPost(props) {
    return (dispatch) => {
        dispatch({type: "PENDING_POST"});
        load(props, function (result) {
            if (result.success === 0) {
                dispatch({type: "RENDERED_POST", payload: result.data});
            } else if (result.success === 2) {
                dispatch({type: "404"});
            }
        });
    }
}