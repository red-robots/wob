(function($){
    var { Router, Route, IndexRoute, Link } = ReactRouter
    var Post = React.createClass({
        html: function (data) {
            return {__html: data};
        },
        render: function() {
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
    });
    var Page = React.createClass({
        html: function (data) {
            return {__html: data};
        },
        render: function() {
            var data = this.props.data;
            return (
                <div className="page-{data.id}">
                    <header>
                        <h2 dangerouslySetInnerHTML={this.html(data.title.rendered)}/>
                    </header>
                    <div className="copy" dangerouslySetInnerHTML={this.html(data.content.rendered)} />
                </div>
            );
        }
    });
    var PostWrapper = React.createClass({
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        render: function() {
            var dataDump = this.state.data.map(function(data) {
                return (
                    <Post data={data} key={data.id}/>
                );
            });
            return (
                <div className="post wrapper">
                    {dataDump}
                </div>
            );
        }
    });
    var PageWrapper = React.createClass({
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        render: function() {
            var dataDump = this.state.data.map(function(data) {
                return (
                    <Page data={data} key={data.id}/>
                );
            });
            return (
                <div className="page wrapper">
                    {dataDump}
                </div>
            );
        }
    });
    var Home = React.createClass({
        render: function() {
            var url = example_vars.api_root+"/posts?limit=3";
            return (
                <div>
                    <PostWrapper url={url}/>
                    {this.props.children}
                </div>
            );
        }
    });
    var SlugLookup = React.createClass({
        getInitialState: function() {
            return {data: []};
        },
        load: function(){
            this.setState({success: -1});
            var url = example_vars.api_root+"/posts/?slug="+this.props.params.slug;
            $.ajax({
                url: url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    if(data.length!==0){
                        this.setState({data: data[0]});
                        this.setState({success: 0});
                    } else {
                        url = example_vars.api_root+"/pages/?slug="+this.props.params.slug;
                        $.ajax({
                            url: url,
                            dataType: 'json',
                            cache: false,
                            success: function(data) {
                                if(data.length!==0){
                                    this.setState({data: data[0]});
                                    this.setState({success: 1});
                                }
                            }.bind(this),
                            error: function(xhr, status, err) {
                                console.error(this.props.url, status, err.toString());
                                this.setState({success: 2});
                            }.bind(this)
                        });
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    this.setState({success: 2});
                }.bind(this)
            });
        },
        componentWillMount: function(){
            this.load();
        },
        componentWillReceiveProps: function(props){
            this.props = props;
            this.load();
        },
        render: function() {
            console.log(this.state.success);
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
                        <div>
                            <Template404 />
                            {this.props.children}
                        </div>
                    );
            }
            
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    });
    var Template404 = React.createClass({ 
        render: function(){
            return (
                <div className="template-404">
                    404 - Not Found
                </div>
            );
        }
    });
    var Header = React.createClass({
        render: function(){
            return (
                <div>
                    <nav className="main">
                        <Link to={example_vars.root} >Home</Link>
                        <Link to={example_vars.root+"test"}>Test</Link>
                        <Link to={example_vars.root+"sample-page"}>Sample Page</Link>
                        <Link to={example_vars.root+"hello-world"}>Hello World</Link>
                        <Link to={example_vars.root+"my-new-page"}>New Page</Link>
                        <Link to={example_vars.root+"my-favorite-page"}>Favorite Page</Link>
                    </nav>
                </div>
            );
        }
    });
    var MainLayout = React.createClass({ 
        render: function(){
            return (
                <article className="template-home">
                    <Header />
                    {this.props.children}
                </article>
            );
        }
    });
    var browserHistory = ReactRouter.browserHistory;
    ReactDOM.render(
        <Router  history={browserHistory}>
            <Route path={example_vars.root} component={MainLayout}>
                <IndexRoute component={Home}/>
                <Route path=":slug" component={SlugLookup} />
            </Route>
        </Router>,
        $('#main')[0]
    );
})(jQuery);
