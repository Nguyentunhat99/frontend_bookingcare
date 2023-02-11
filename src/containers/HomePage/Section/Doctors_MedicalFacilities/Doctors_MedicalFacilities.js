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
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
        };
        return(
            <div className='section-Doctors_MedicalFacilities-container'>
                <div className="section-Doctors_MedicalFacilities-content">
                    <div className='Doctors_MedicalFacilities-header'>
                        <h2 className='Doctors_MedicalFacilities-heading'>Cẩm nang</h2>
                        <div className='Doctors_MedicalFacilities-link'><span>Tất cả bài viết</span></div>
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
