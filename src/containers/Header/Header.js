import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from '../../utils';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import images from '../../assets/images';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        };
    }
    changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);//truy cap hafm cua redux thong qua cau lenh this.props 
    }

    componentDidMount(){//phan quyen menu
        let { userInfo } = this.props;//redux
        console.log('userInfo', userInfo);
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleid;
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu
            }
            if (role === USER_ROLE.DOCTOR) {
                menu = doctorMenu
            }
        }
        this.setState({
            menuApp : menu,
        })
    }

    render() {
        const { processLogout, language , userInfo } = this.props;
        console.log(userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>
                <div className='languages'>
                    <span className='welcome'>
                        <FormattedMessage id="homeheader.Welcome" />    
                        , {userInfo && userInfo.firstName ? userInfo.firstName : ""} !</span>
                    <span
                        className={language === LANGUAGES.VI ? 'language-vn active' : 'language-vn'}                       
                        onClick={() =>{this.changeLanguage(LANGUAGES.VI)}}>
                        <img src={images.vn} alt='vn' width='22'/>
                    </span>
                    <span
                        className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                        onClick={() =>{this.changeLanguage(LANGUAGES.EN)}}>
                        <img src={images.en} alt='en' width='22'/>
                    </span>
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
        userInfo: state.user.userInfo,//lay thong tin user tu redux cx luu trong local storage
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
