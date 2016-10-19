import React from 'react';
import Header from './Header';
import Footer from './Footer';

class MainLayout extends React.Component {
    render(){
        return (
            <div className="Primary">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;
