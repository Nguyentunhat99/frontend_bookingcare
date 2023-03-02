import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Doctors_MedicalFacilities.scss';
import { FormattedMessage } from 'react-intl';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Doctors_MedicalFacilities extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
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
            <div className='section-Doctors_MedicalFacilities-container'>
                <div className="section-Doctors_MedicalFacilities-content">
                    <div className='Doctors_MedicalFacilities-header'>
                        <h2 className='Doctors_MedicalFacilities-heading'><FormattedMessage id='homeheader.Doctors_MedicalFacilities'/></h2>
                        <div className='Doctors_MedicalFacilities-link-list'>
                            <div className='Doctors_MedicalFacilities-link'><span><FormattedMessage id='homeheader.Post'/></span></div>
                            <div className='Doctors_MedicalFacilities-link'><span><FormattedMessage id='homeheader.cooperate'/></span></div>
                            <div className='Doctors_MedicalFacilities-link'><span><FormattedMessage id='homeheader.Contact'/></span></div>
                        </div>
                    </div>
                    <div className='Doctors_MedicalFacilities-body'>
                        <Slider {...settings}>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className='Doctors_MedicalFacilities-customize'>
                                <div className='Doctors_MedicalFacilities-image'></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctors_MedicalFacilities);
