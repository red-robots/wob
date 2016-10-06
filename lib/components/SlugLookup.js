import React from 'react';
import Post from './Post';
import Page from './Page';
import Template404 from './Template404';

class SlugLookup extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }
    load(){
        this.setState({success: -1});
        var url = wobbegong.api_root+"posts/?slug="+this.props.params.slug;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = JSON.parse(xhttp.responseText);
                if(data.length!==0){
                    this.setState({data: data[0]});
                    this.setState({success: 0});
                } else {
                    url = wobbegong.api_root+"pages/?slug="+this.props.params.slug;
                    var xhttp2 = new XMLHttpRequest();
                    xhttp2.onreadystatechange = function() {
                        if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                            var data = JSON.parse(xhttp2.responseText);
                            if(data.length!==0){
                                this.setState({data: data[0]});
                                this.setState({success: 1});
                            }
                        } else if (xhttp.readyState == 4 && xhttp.status == 404) {
                            this.setState({success: 2});
                        }
                    }.bind(this);
                    xhttp2.open("GET", url, true);
                    xhttp2.send();
                }
            } else if (xhttp.readyState == 4 && xhttp.status == 404) {
                this.setState({success: 2});
            }
        }.bind(this);
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    componentWillMount(){
        this.load();
    }
    componentWillReceiveProps(props){
        this.props = props;
        this.load();
    }
    render() {
        switch(this.state.success){
            case 0:
                return (
                    <div>
                        <Post data={this.state.data} key={this.state.data.id}/>
                        {this.props.children}
                    </div>
                );
            case 1:
                return (
                    <div>
                        <Page data={this.state.data} key={this.state.data.id}/>
                        {this.props.children}
                    </div>
                );
            case 2:
                return (
                    <Template404/>
                );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default SlugLookup;
