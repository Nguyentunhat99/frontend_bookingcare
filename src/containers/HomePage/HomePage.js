import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader/HomeHeader';
import './HomePage.scss';

class HomePage extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <div className=''>
                <HomeHeader />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
