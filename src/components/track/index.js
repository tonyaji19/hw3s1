import React from 'react';
import './style.css';

class Track extends React.Component {
    constructor(props) {
        super(props)
        const {album, name, artists} = this.props.data;
        this.state = {
            title: name,
            imageUrl: album.images[1].url,
            artistName: artists[0].name
        }
    }

    render() {
        return(
            <div className="track-item">
                <img src={this.state.imageUrl} alt="album-image" ></img>
                <h3>{this.state.title}</h3>
                <p>{this.state.artistName}</p>
                <button className="btn">SELECT TRACK</button>
            </div>
        );
    }
}

export default Track;