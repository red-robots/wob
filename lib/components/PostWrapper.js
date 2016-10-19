import React from 'react';
import {connect} from 'react-redux'
import {loadPost} from '../actions/postActions.js'

class Post extends React.Component {
    componentDidMount() {
        this.props.load(this.props);
    }
    html(data) {
        return {__html: data};
    }
    render() {
        if (this.props.post) {
            return (
                <div className="post-{this.props.post.id}">
                    <header>
                        <h2 dangerouslySetInnerHTML={this.html(this.props.post.title.rendered)}/>
                    </header>
                    <div className="copy" dangerouslySetInnerHTML={this.html(this.props.post.content.rendered)} />
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
    if(ownProps.slug&&state.posts[ownProps.slug]) {
        return {
            post: state.posts[ownProps.slug],
            page: state.page,
            error: state.error,
            slug: ownProps.slug,
        }
    } else {
        return {
            post: null,
            page: state.page,
            error: state.error,
            slug: ownProps.slug,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (props)=>{
            dispatch(loadPost(props));
        }
    }
}
const PostWrapper = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostWrapper;
