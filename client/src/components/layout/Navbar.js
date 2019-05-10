import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    /*
        Linkowanie materialize-css zostało przeniesione z index.html do componentWillMount(),
        żeby później załadowane komponenty (np. SelectedMovie) nie miały domyślnie przypisanego tego arkusza stylów.
        
        https: //github.com/webpack-contrib/style-loader/issues/141
    */
    componentWillMount() {
        require('materialize-css/dist/css/materialize.min.css')
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <a href="#" className="brand-logo blue-text text-accent-1">CINEMA</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>POPULAR</Link></li>
                        <li><Link to='/'>TRENDING</Link></li>
                        <li><Link to='/'>PROMOTIONS</Link></li>
                        <li><Link to='/'>COMING SOON</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;