import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        // console.log(language);
        this.props.changeLanguageAppRedux(language);//truy cap hafm cua redux thong qua cau lenh this.props 
    }

    gotoHomePage = () => {
        if(this.props.history) {
            this.props.history.push('/home')
        }
    }
    render() {
        let language = this.props.language//lay language tu redux dong 146
        console.log(language);
        return (
            <div>
                <div className='homeheader-container'>
                    <div className='homeheader-content'>
                        <div className='content-left'>
                            <i className='fas fa-bars header-icon'></i>
                            <a style={{cursor: 'pointer'}} onClick={() => this.gotoHomePage()}><div className='header-logo'></div></a>
                        </div>
                        <div className='content-center'>
                            <div className='header-menu'>
                                <a href='#' className=''>
                                    <FormattedMessage id='homeheader.speciality'/>
                                    
                                    <span clasname=''>
                                        <FormattedMessage id='homeheader.searchdoctor'/>
                                    </span>
                                </a>
                            </div>
                            <div className='header-menu'>
                                <a href='#' className=''>
                                    <FormattedMessage id='homeheader.healthfacilities'/>
                                    <span clasname=''>
                                        <FormattedMessage id='homeheader.choosehospitalclinic'/>                                       
                                    </span>
                                </a>
                            </div>
                            <div className='header-menu'>
                                <a href='#' className=''>
                                    <FormattedMessage id='homeheader.doctor'/>
                                    <span clasname=''>
                                        <FormattedMessage id='homeheader.Chooseagooddoctor'/>
                                    </span>
                                </a>
                            </div>
                            <div className='header-menu'>
                                <a href='#' className=''>
                                    <FormattedMessage id='homeheader.examinationpackage'/>
                                    <span clasname=''>
                                        <FormattedMessage id='homeheader.generalhealthcheck'/>  
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='content-right'>
                            <div className='header-support'>
                                <a href='#'>
                                    <i className='fas fa-question-circle icon-question'></i>
                                    <span><FormattedMessage id='homeheader.support' /></span>
                                </a >
                            </div >
                            <div className='language'>
                                <span className={language === LANGUAGES.VI ? 'language-vn active' : 'language-vn'} onClick={() => {this.changeLanguage(LANGUAGES.VI)}}>VN</span>
                                <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => {this.changeLanguage(LANGUAGES.EN)}}>EN</span>
                            </div >
                        </div>
                    </div >
                </div>
                {this.props.isShowBanner === true &&
                    <div className='homeheader-banner'>
                        <h1 className='title title-one'><FormattedMessage id='homeheader.medicalbackground'/></h1>
                        <h1 className='title title-two'><FormattedMessage id='homeheader.comprehensivehealthcare'/></h1>
                        <div className='search'>
                            <i className='fas fa-search icon-search'></i>
                            <input type='text' className='search-input' placeholder='Search...' />
                        </div>
                        <div className='options'>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-ck'></div>
                                    <FormattedMessage id='homeheader.examination_specialist'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-ktx'></div>
                                    <FormattedMessage id='homeheader.Remote_examination'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-ktq'></div>
                                    <FormattedMessage id='homeheader.General_examination'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-xnyh'></div>
                                    <FormattedMessage id='homeheader.Medical_test'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-sktt'></div>
                                    <FormattedMessage id='homeheader.Mental_health'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-knk'></div>
                                    <FormattedMessage id='homeheader.Dental_examination'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-gpt'></div>
                                    <FormattedMessage id='homeheader.Surgery_pack'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-spyt'></div>
                                    <FormattedMessage id='homeheader.Medical_products'/>
                                </a>
                            </div>
                            <div className='option-item'>
                                <a href='#'>
                                    <div className='icon-skdn'></div>
                                    <FormattedMessage id='homeheader.Business_health'/>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language, //la tu redux sau khi setstate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))//fire action cua redux co ten la changeLanguageApp
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
