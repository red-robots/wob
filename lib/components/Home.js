import React from 'react';
import PostWrapper from './PostWrapper'

class Home extends React.Component {
    render() {
        return (
            <main>
                Home
                <div className="section">
                    <PostWrapper slug="hello-world"/>
                </div>
                <div className="section">
                    <PostWrapper slug="test"/>
                </div>
                {this.props.children}
            </main>
        );
    }
}

export default Home;
