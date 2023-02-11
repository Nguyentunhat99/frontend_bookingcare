import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        };
        return(
            <div className='section-specialty-container'>
                <div className="section-specialty-content">
                    <div className='specialty-header'>
                        <h2 className='specialty-heading'>Chuyên khoa phổ biến</h2>
                        <div className='specialty-link'><span>Xem thêm</span></div>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-image'></div>
                                <h3>Cơ xương khớp</h3>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
