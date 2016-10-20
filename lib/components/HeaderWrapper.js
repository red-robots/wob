import React from 'react';
import {connect} from 'react-redux'
import {loadHeader} from '../actions/headerActions.js'
import { Link} from 'react-router'

class Header extends React.Component {
    componentDidMount(){
        this.props.load();
    }
    render(){
        if(this.props.menu.length>0) {
            function getLinks(menu) {
                return menu.map(function (obj) {
                    if(obj.children) {
                        var sublinks = getLinks(obj.children);
                        return (<li key={obj.id}><Link to={"/"+obj.url.replace(wobbegong.domain,"")}>{obj.title}</Link><ul>{sublinks}</ul></li>);
                    } else {
                        return (<li key={obj.id}><Link to={"/"+obj.url.replace(wobbegong.domain,"")}>{obj.title}</Link></li>);
                    }
                });
            }
            var allLinks = getLinks(this.props.menu);
            return (
                <div className="header inter">
                    <ul>
                        {allLinks}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="header inter">

                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    if(state.header && state.header.menu) {
        var menu = state.header.menu;
    } else {
        var menu = new Array();
    }
    return {
        menu: menu,
        error: state.error,
        params: ownProps.params,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: ()=>{
            dispatch(loadHeader());
        }
    }
}
const HeaderWrapper = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderWrapper;
