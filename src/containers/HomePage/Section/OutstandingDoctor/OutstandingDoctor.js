import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss';
import { FormattedMessage } from 'react-intl';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutstandingDoctor extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        };
        return(
            <div className='section-OutstandingDoctor-container'>
                <div className="section-OutstandingDoctor-content">
                    <div className='OutstandingDoctor-header'>
                        <h2 className='OutstandingDoctor-heading'>Bác sĩ nổi bật tuần qua</h2>
                        <div className='OutstandingDoctor-link'><span>Tìm kiếm</span></div>
                    </div>
                    <div className='OutstandingDoctor-body'>
                        <Slider {...settings}>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='OutstandingDoctor-contant'>
                                    <div className='OutstandingDoctor-image'></div>
                                    <div className='OutstandingDoctor-info'>
                                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                        <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
