import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HealthFacilities.scss';
import { FormattedMessage } from 'react-intl';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HealthFacilities extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        };
        return(
            <div className='section-HealthFacilities-container'>
                <div className="section-HealthFacilities-content">
                    <div className='HealthFacilities-header'>
                        <h2 className='HealthFacilities-heading'>Cơ sở y tế</h2>
                        <div className='HealthFacilities-link'><span>Tìm kiếm</span></div>
                    </div>
                    <div className='HealthFacilities-body'>
                        <Slider {...settings}>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
                            </div>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
                            </div>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
                            </div>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
                            </div>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
                            </div>
                            <div className='HealthFacilities-customize'>
                                <div className='HealthFacilities-image'></div>
                                <h3>Bệnh viện hữu nghị Việt Đức</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacilities);
