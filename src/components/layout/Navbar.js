import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    //console.log(props);
    const {auth} = props;
    //console.log(auth);
    //console.log(auth.uid);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>; // was
    // const links = auth.id ? <SignedOutLinks/> : <SignedInLinks/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);