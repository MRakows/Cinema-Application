import './SelectedMovie.css';
import '../fontello/css/fontello.css';
import React from 'react';

class SelectedMovie extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="image">
                    <div className="rating">9.5</div>
                </div>
                <div className="details">
                    <h1 className="title">Star Wars</h1>
                    <h3 className="subtitle">Episode VII - The Force Awakens</h3>
                    <p className="description">After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star.</p>
                </div>
                <nav><i className="icon-down-open-big"></i></nav>
            </div>
        );
    }
}

export default SelectedMovie;