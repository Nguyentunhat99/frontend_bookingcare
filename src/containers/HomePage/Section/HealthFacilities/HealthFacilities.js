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
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
        return(
            <div className='section-HealthFacilities-container'>
                <div className="section-HealthFacilities-content">
                    <div className='HealthFacilities-header'>
                        <h2 className='HealthFacilities-heading'><FormattedMessage id='homeheader.healthfacilities'/></h2>
                        <div className='HealthFacilities-link'><span><FormattedMessage id='homeheader.Search'/></span></div>
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
