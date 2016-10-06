import React from 'react';

class Home extends React.Component {
    render(){
        return (
            <main>
                Home
                {this.props.children}
            </main>
        );
    }
}

export default Home;
