import React from 'react';
import SearchBar from '../searchbar';
import './style.css';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.scope = 'playlist-modify-private';
        this.link = `https://accounts.spotify.com/authorize?client_id=85a543ba79e54f91acdda93b9b01f6a8&response_type=token&redirect_uri=http://localhost:3000/`;
        this.state = {
           playlist: this.props.data,
           token: null,
        }
    }

    getParams = () => {
        const hash = window.location.hash.substr(1);
        const params = new URLSearchParams(hash);
        return params;
    }

    componentDidMount() {
        const params = this.getParams();
        const token = params.get('access_token');

        if (token) {
            this.setState({
                token
            })
        }
    }

    render() {
        const {token} = this.state;
        return (
            <div id="login">
                { 
                    this.state.token === null 
                    ? <button className="btn" href={this.link} onClick={this.handleLogin}>Login</button>
                    : <SearchBar token={token}/>
                } 
            </div>
        );
    }
}

export default Login;