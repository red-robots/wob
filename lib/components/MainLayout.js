import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import Footer from './Footer';

class MainLayout extends React.Component {
    render(){
        return (
            <div className="Primary">
                <HeaderWrapper/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;
