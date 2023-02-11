import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);//truy cap hafm cua redux thong qua cau lenh this.props 
    }
    render() {
        const { processLogout, language } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span
                        className={language === LANGUAGES.VI ? 'language-vn active' : 'language-vn'}                       
                        onClick={() =>{this.changeLanguage(LANGUAGES.VI)}}>VN</span>
                    <span
                        className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                        onClick={() =>{this.changeLanguage(LANGUAGES.EN)}}>EN</span>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                {/* nút logout */}
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
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))//fire action cua redux co ten la changeLanguageApp
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
