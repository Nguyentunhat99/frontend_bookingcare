import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.scss';
import { FormattedMessage } from 'react-intl';
import images from '../../../../assets/images';
class Footer extends Component {
    render() {
        return(
            <div className='section-Footer-container'>
                <div className="section-Footer-content">
                    <small>© 2023 BookingCare by Nguyen Tu Nhat</small>
                    <div className='Footer-link'>
                        <a href="https://www.facebook.com/ntnhat34/" target='blank'><img src={images.Fb} width='32px' height='32px' alt='Facebook' /></a>
                        <a href='https://www.youtube.com/channel/UCtJNbdukfWyWRsexHGFL_Zw' target='blank'><img src={images.Ytb} width='32px' height='32px' alt='Youtube' /></a>
                    </div>
                </div>
            </div>
        )
        
    }
        l
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
