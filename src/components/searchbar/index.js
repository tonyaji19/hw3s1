import React from 'react';
import axios from "axios";
import Playlist from '../playlist';
import './style.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.token = this.props.token;
        this.state = {
            search: '',
            playlist: null,
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value,
        })
    }

    handleClick = async (event) => {
        const {search} = this.state;
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        };

        const result = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=playlist`, config);
        
        console.log(result);
        this.setState({
            playlist: result.data.playlist.items,
        });
    }

    render() {
        const {playlist} = this.state;
        return (
            <div>
                <input type="text" name="search" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search</button>
                { playlist && <Playlist data={playlist} /> }
            </div>
        )
    }
}

export default SearchBar;