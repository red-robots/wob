import React from 'react';
import { Link} from 'react-router';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <ul>
                    <li><Link to={wobbegong.root}>Home</Link></li>
                    <li><Link to={wobbegong.root+"hello-world"}>Hello World</Link></li>
                    <li><Link to={wobbegong.root+"sample-page"}>Sample Page</Link></li>
                    <li><Link to={wobbegong.root+"test"}>Test</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
