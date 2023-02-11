import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Download.scss';
import { FormattedMessage } from 'react-intl';
import images from '../../../../assets/images';
// import Image from '../../Image/Image';
class Download extends Component {
    render() {
        return(
            <div className='section-Download-container'>
                <div className="section-Download-content">
                    <div className='Download-mobile'><div className='Download-mobileapp'></div></div>
                    <div className='Download-info'>
                        <h2>Tải ứng dụng BookingCare</h2>
                        <ul>
                            <li>Đặt khám nhanh hơn</li>
                            <li>Nhận thông báo từ hệ thống</li>
                            <li>Nhận hướng dẫn đi khám chi tiết</li>
                        </ul>
                        <div className='Download-link'>
                            <a href="https://bookingcare.vn/app/android" target='blank'><img src={images.Android} width='135px' height='40px' alt='Tải ứng dụng BookingCare trên Android' /></a>
                            <a href='https://bookingcare.vn/app/ios' target='blank'><img src={images.Ios} width='120px' height='40px' alt='Tải ứng dụng BookingCare trên IOS' /></a>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Download);
