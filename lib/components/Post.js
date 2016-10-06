import React from 'react';

class Post extends React.Component {
    html(data) {
        return {__html: data};
    }
    render() {
        var data = this.props.data;
        return (
            <div className="post-{data.id}">
                <header>
                    <h2 dangerouslySetInnerHTML={this.html(data.title.rendered)}/>
                </header>
                <div className="copy" dangerouslySetInnerHTML={this.html(data.content.rendered)} />
            </div>
        );
    }
}

export default Post;
