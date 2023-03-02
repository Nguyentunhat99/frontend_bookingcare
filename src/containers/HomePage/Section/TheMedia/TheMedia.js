import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TheMedia.scss';
import { FormattedMessage } from 'react-intl';

class TheMedia extends Component {
    render() {
        return(
            <div className='section-TheMedia-container'>
                <div className="section-TheMedia-content">
                    <h2 className='TheMedia-heading'><FormattedMessage id='homeheader.Media'/></h2>
                    <div className='TheMedia-body'>
                        <div className='TheMedia-video'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FyDQljKtWnI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='TheMedia-media'>
                            <div className='TheMedia-list'>
                                <div className='TheMedia-item'>
                                    <a target="_blank" title="Báo sức khỏe đời sống nói về BookingCare" href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-n153232.html">
                                        <div className='TheMedia-skds'></div>
                                    </a>
                                </div>
                                <div className='TheMedia-item'>
                                    <a target='_blank' title="VTV1 - Cà phê khởi nghiệp 14-11-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm">
                                        <div className='TheMedia-cpknvtv1'></div>
                                    </a>
                                </div>
                                <div className='TheMedia-item'>
                                    <a target="_blank" title="Báo điện tử ictnews giới thiệu BookingCare" href="https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict">
                                        <div className='TheMedia-ictnews'></div>
                                    </a>
                                </div>
                                <div className='TheMedia-item'>
                                    <a target="_blank" title="Báo điện tử ictnews giới thiệu BookingCare" href="https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict">
                                        <div className='TheMedia-ictnews'></div>
                                    </a>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TheMedia);
