import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Handbook.scss';
import { FormattedMessage } from 'react-intl';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Handbook extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
        };
        return(
            <div className='section-Handbook-container'>
                <div className="section-Handbook-content">
                    <div className='Handbook-header'>
                        <h2 className='Handbook-heading'>Cẩm nang</h2>
                        <div className='Handbook-link'><span>Tất cả bài viết</span></div>
                    </div>
                    <div className='Handbook-body'>
                        <Slider {...settings}>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
                            </div>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
                            </div>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
                            </div>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
                            </div>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
                            </div>
                            <div className='Handbook-customize'>
                                <div className='Handbook-image'></div>
                                <h3>Top 7 địa chỉ khám Mắt tốt Hà Nội, có bác sĩ giỏi (Phần 3)</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
