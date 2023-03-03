import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader/HomeHeader';
import Specialty from './Section/Specialty/Specialty';
import './HomePage.scss';
import HealthFacilities from './Section/HealthFacilities/HealthFacilities';
import OutstandingDoctor from './Section/OutstandingDoctor/OutstandingDoctor';
import Handbook from './Section/Handbook/Handbook';
import TheMedia from './Section/TheMedia/TheMedia';
import Download from './Section/Download/Download';
import Doctors_MedicalFacilities from './Section/Doctors_MedicalFacilities/Doctors_MedicalFacilities';
import Footer from './Section/Footer/Footer';

class HomePage extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <div className=''>
                <HomeHeader isShowBanner={true}/>
                <Specialty />
                <HealthFacilities />
                <OutstandingDoctor />
                <Handbook />
                <TheMedia />
                <Download />
                <Doctors_MedicalFacilities />
                <Footer />
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
