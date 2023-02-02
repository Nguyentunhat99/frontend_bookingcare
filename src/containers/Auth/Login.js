import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import {handleLoginApi} from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleLogin = async () => {
        this.setState({//trc khi request thi xoa loi cu
            errMessage:''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            console.log(data);
            if(data && data.errCode === 0){//chp dệ hàm chpo phép đăng nhập
                this.props.userLoginSuccess(data.user)
                console.log('Login succeeds');
            };
            if(data && data.errCode !== 0 ){
                this.setState({
                    errMessage: data.message
                })
            };
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                    errMessage: error.response.data.message
                })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-heading'>Login</div>
                        <div className='col-12 form-group  bottom-line'>
                            <label className='text-label'>Username:</label>
                            <input 
                                type='email' 
                                placeholder='Enter your username' 
                                className='form-control form-input' 
                                value={this.state.username}
                                onChange={(e) => this.setState({username: e.target.value})}
                                />
                        </div>
                        <div className='col-12 form-group bottom-line'>
                            <label className='text-label'>Password:</label>
                            <div>
                                <input 
                                    type={this.state.isShowPassword?'text':'password'} 
                                    placeholder='Enter your password' 
                                    className='form-control form-input form-password'  
                                    value={this.state.password}
                                    onChange={(e) => { this.setState({ password: e.target.value })} }
                                />
                                
                                {this.state.password === ''?'':
                                <span onClick={() => this.handleShowHidePassword()}><i className={this.state.isShowPassword?'far fa-eye icon-eye':'far fa-eye-slash icon-eye'}></i></span>
                                }
                            </div>
                        </div>
                        <div className='col-12'>
                            <p style={{color:'red'}}>{this.state.errMessage}</p>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-pass'>Forgot your password</span>
                        </div>
                        <div className='col-12'></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
