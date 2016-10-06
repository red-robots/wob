import React from 'react';
import Header from './Header';

class MainLayout extends React.Component {
    render(){
        return (
            <div className="Primary">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;
