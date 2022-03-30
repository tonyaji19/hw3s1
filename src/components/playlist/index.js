import React from 'react';
import Track from '../track';
import './style.css';

class Playlist extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            playlist: this.props.data,
        }
    }

    render() {
        return (
            <div id="playlist-container">
                {this.state.playlist.map((track) => (
                    <Track key={track.id} data={track} />
                ))}
            </div>
        );
    }
}

export default Playlist;