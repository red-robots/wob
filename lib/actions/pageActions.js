/**
 * Created by fritz on 10/19/16.
 */
const load = (props,callback) => {
    var result = {
        success: -1,
        data: null
    };
    var url = wobbegong.api_root + "posts/?slug=" + props.params.slug;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            if (data.length > 0) {
                result.data = data[0];
                result.success = 0;
                callback(result);
            } else {
                url = wobbegong.api_root + "pages/?slug=" + props.params.slug;
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function () {
                    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                        var data = JSON.parse(xhttp2.responseText);
                        if (data.length > 0) {
                            result.data = data[0];
                            result.success = 0;
                            callback(result);
                        }
                    } else if (xhttp.readyState == 4 ) {
                        result.success = 2;
                        callback(result);
                    }
                }
                xhttp2.open("GET", url, true);
                xhttp2.send();
            }
        } else if (xhttp.readyState == 4) {
            result.success = 2;
            callback(result);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
export function loadPage(props) {
    return (dispatch) => {
        dispatch({type: "PENDING_PAGE"});
        load(props, function (result) {
            if (result.success === 0) {
                dispatch({type: "RENDERED_PAGE", payload: result.data});
            } else if (result.success === 2) {
                dispatch({type: "404"});
            }
        });
    }
}