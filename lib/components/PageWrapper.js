import React from 'react';
import {connect} from 'react-redux'
import {loadPage} from '../actions/pageActions.js'

class Page extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.page && this.props.page && prevProps.page.slug !== this.props.params.slug) {
            this.props.load(this.props);
        }
    }
    componentDidMount() {
        this.props.load(this.props);
    }
    html(data) {
        return {__html: data};
    }
    render() {
        if (this.props.page) {
            return (
                <div className={"post-"+this.props.page.id}>
                    <header>
                        <h2 dangerouslySetInnerHTML={this.html(this.props.page.title.rendered)}/>
                    </header>
                    <div className="copy" dangerouslySetInnerHTML={this.html(this.props.page.content.rendered)} />
                </div>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        page: state.page,
        error: state.error,
        params: ownProps.params,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (props)=>{
            dispatch(loadPage(props));
        }
    }
}
const PageWrapper = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageWrapper;
