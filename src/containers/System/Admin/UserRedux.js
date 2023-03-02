import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FormattedMessage } from 'react-intl';
import TableUserManage from './TableUserManage';
class UserRedux extends Component {

    constructor(props) {
        super(props) ;
            this.state = {
                arrGender:'',
                arrPosition:'',
                previewImgURL:'',
                isOpen:false,
                isShowPassword: false,
                gender:'',
                position:'',
                role:'',
                avatar:'',
                action:'',
                userId:'',
                password: ''
            }
    }

    async componentDidMount() {          
        this.props.getGenderStart();
        this.props.getPositionStart();  
        this.props.getRoleStart();  
        this.props.editUserStart();  
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//cap nhat state
        // /render => didupdate
        // hien taau (this) va qua khu (previous)
        //[] [3] trc khi render

        // /render lai 
        // [3] [3]
        if(prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                arrGender: arrGenders,
                gender: arrGenders && arrGenders.length>0 ? arrGenders[0].keyMap :''//set select mac dinh
            })
        }
        if(prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                arrPosition: arrPositions,
                position: arrPositions && arrPositions.length>0 ? arrPositions[0].keyMap :''
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                arrRole: arrRoles,
                role: arrRoles && arrRoles.length>0 ? arrRoles[0].keyMap :''
            })
        }
        if(prevProps.users !== this.props.users){
            let arrRoles = this.props.roleRedux
            let arrGenders = this.props.genderRedux
            let arrPositions = this.props.positionRedux
            this.setState({
                email:'',
                password:'',
                firstName:'',
                lastName:'',
                phonenumber:'',
                avatar:'',
                address:'',
                previewImgURL:'',
                position: arrPositions && arrPositions.length>0 ? arrPositions[0].keyMap :'',
                gender: arrGenders && arrGenders.length>0 ? arrGenders[0].keyMap :'',
                role: arrRoles && arrRoles.length>0 ? arrRoles[0].keyMap :'',
                action: CRUD_ACTIONS.CREATE
            })            
        }
    }
    handleOnchangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            console.log(objectUrl);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }
    }

    openPreviewImage = () => {
        if(!this.state.previewImgURL) return;
        this.setState({
            isOpen: true 
        })
    }


    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email','password','firstName','lastName','phonenumber','address'];
        for (let i = 0; i < arrInput.length; i++) {// chi can chua nhap dl 1 oo thif se dunf lai ngay lap tuc
            console.log('arrInput', arrInput[i]);
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('You have not entered data '+arrInput[i])
                break;
            }
        }
        return isValid
    };

    handleOnchangeInput = (e, data) => {//lưu tát cả vào biến vào biến copystate xong r setState
        console.log(e.target.value, data);
        let copyState = {...this.state};
        copyState[data] = e.target.value;
        console.log('copyState:', copyState);
        this.setState({
            ...copyState
        })
    }    

    handleAddNewUserRedux = () => {        
        let isValid = this.checkValidateInput();
        if(isValid === false) return;
        let {action} = this.state; //<=> let action = this.state.action
        if(action === CRUD_ACTIONS.CREATE){
            this.props.createNewUserRedux({//fire redux create úser
                email: this.state.email, 
                password: this.state.password,
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                address: this.state.address, 
                phonenumber: this.state.phonenumber,  
                gender: this.state.gender, 
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
            });//goij toi tk cha/ tryten dl state u con sang chaa            
        };
        if(action === CRUD_ACTIONS.EDIT){
            this.props.editUserStart({
                id: this.state.userId,
                email: this.state.email, 
                password: this.state.password,
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                address: this.state.address, 
                phonenumber: this.state.phonenumber,  
                gender: this.state.gender, 
                roleId: this.state.role,
                positionId: this.state.position,         
                avatar: this.state.avatar 
            });  
        }

        // this.props.getAllUsersStart();
    }

    handleUpdateUser = async (data) => {
        console.log('data user update', data);
        let imageBase64 = '';
        if(data.image){
            imageBase64 = new Buffer(data.image, 'base64').toString('binary');
        }
        this.setState({
            email:data.email,
            password:'Hard code',
            firstName:data.firstName,
            lastName:data.lastName,
            phonenumber:data.phonenumber,
            avatar:'',
            previewImgURL: imageBase64,
            address:data.address,
            position: data.positionid,
            gender: data.gender,
            role: data.roleid,
            action: CRUD_ACTIONS.EDIT,
            userId: data.id,
        })
    }

    render() {
        let genders = this.state.arrGender;
        let positions = this.state.arrPosition;
        let roles = this.state.arrRole;
        console.log('check state:', this.state);        
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        console.log('check isLoadingGender:', this.props.isLoadingGender); 

        let {email,password,firstName,lastName,phonenumber,address,isOpen,role,position,gender,isShowPassword,previewImgURL} = this.state;

        return (
            <div>
                <div className="title" >UserRedux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='form-redux mt-4'>
                            <div className="row">
                                <div className='col-12'>{isLoadingGender === true ? 'Loading gender' : ''}</div>
                                <div className='col-12 text-center'>
                                    <h2><FormattedMessage id="menu.admin.Add_new_user" /></h2>    
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="">Email</label>
                                    <input 
                                        className="form-control" 
                                        type="email" 
                                        name="email"
                                        value={email || ''}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                        onChange={(e) => { this.handleOnchangeInput(e, 'email')} }
                                    />
                                </div>
                                <div className="form-group col-3">
                                   <div>
                                        <label htmlFor="">
                                            <FormattedMessage id="menu.admin.Password" />
                                        </label>
                                        <input 
                                            className="form-control password"
                                            type={isShowPassword?'text':'password'} 
                                            name="password"
                                            value={password || ''}
                                            disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'password')} }
                                        />
                                   </div>
                                    {password === ''?'':
                                    <span onClick={() => this.handleShowHidePassword()}><i className={isShowPassword?'far fa-eye icon-eye':'far fa-eye-slash icon-eye'}></i></span>
                                    }
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Firstname" />
                                    </label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="firstName"
                                        value={firstName || ''}
                                        onChange={(e) => { this.handleOnchangeInput(e, 'firstName')} }
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Lastname" />
                                    </label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="lastName"
                                        value={lastName || ''}
                                        onChange={(e) => { this.handleOnchangeInput(e, 'lastName')} }
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Phonenumber" />
                                    </label>
                                    <input 
                                        className="form-control" 
                                        type="number" 
                                        name="phonenumber"
                                        value={phonenumber || ''}
                                        onChange={(e) => { this.handleOnchangeInput(e, 'phonenumber')} }
                                    />
                                </div>
                                <div className="form-group col-9">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Address" />
                                    </label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="address" 
                                        value={address || ''}
                                        onChange={(e) => { this.handleOnchangeInput(e, 'address')} }
                                    />
                                </div>                                
                            </div>
                            <div className='row'>
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Gender" />
                                    </label>
                                    <select 
                                        className="form-control" 
                                        name="gender" id=""
                                        onChange={(e) => { this.handleOnchangeInput(e, 'gender')} }
                                        value={gender} 
                                    >
                                        {genders && genders.length && genders.map((gender,index)=> {
                                            return (
                                                <option key={index} value={gender.key}>{LANGUAGES.VI === language ? gender.valueVi : gender.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Position" />
                                    </label>
                                    <select 
                                        className="form-control" 
                                        name="roleid" id=""
                                        onChange={(e) => { this.handleOnchangeInput(e, 'position')} }
                                        value={position}
                                    >
                                        {positions && positions.length && positions.map((position,index)=> {
                                            return (
                                                <option key={index} value={position.key}>{LANGUAGES.VI === language ? position.valueVi : position.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Role" />
                                    </label>
                                    <select 
                                        className="form-control" 
                                        name="roleid" id=""
                                        onChange={(e) => { this.handleOnchangeInput(e, 'role')} }
                                        value={role}
                                    >
                                        {roles && roles.length && roles.map((role,index)=> {
                                            return (
                                                <option key={index} value={role.key}>{LANGUAGES.VI === language ? role.valueVi : role.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                 <div className="form-group col-3">
                                    <label htmlFor="">
                                        <FormattedMessage id="menu.admin.Avatar" />
                                    </label>
                                    <div className='preview-img-container'>
                                        <input 
                                            className="form-control" 
                                            hidden id='previewImg' 
                                            type="file"                                             
                                            name="avatar"
                                            onChange={(e)=>this.handleOnchangeImage(e)}
                                        />
                                        <label htmlFor='previewImg' className='label-upload'>
                                            <FormattedMessage id="menu.admin.Upload_image" />
                                            <i className='fas fa-upload'></i>
                                        </label>
                                        <div 
                                            className='preview-image'
                                            style={{ backgroundImage:`url(${previewImgURL})`}}
                                            onClick={() => this.openPreviewImage()}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group col-12'>
                                <button 
                                    className={this.state.action === CRUD_ACTIONS.EDIT ?
                                    "btn btn-warning" : "btn btn-primary" 
                                    }
                                    type="submit"
                                    onClick={()=>this.handleAddNewUserRedux()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT 
                                    ?<FormattedMessage id="menu.admin.Edit" />
                                    : <FormattedMessage id="menu.admin.Add" />
                                    }
                                </button>
                            </div>
                        </div>
                        <TableUserManage 
                            handleUpdateUser = {this.handleUpdateUser}
                            // action = {this.state.action}
                            itemsPerPage={4}
                        />
                    </div>
                    {isOpen === true &&
                        <Lightbox
                            mainSrc={previewImgURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    
                    }
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoadingGender : state.admin.isLoadingGender,
        genderRedux : state.admin.genders,//lay du lieu gnder tu staet redux
        positionRedux : state.admin.positions,
        roleRedux : state.admin.roles,
        users: state.admin.usersData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),//fire action

        getPositionStart: () => dispatch(actions.fetchPositionStart()),//fire action

        getRoleStart: () => dispatch(actions.fetchRoleStart()),//fire action

        createNewUserRedux: (data) => dispatch(actions.createNewUser(data)),//fire action

        getAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),//fire action

        editUserStart: (data) => dispatch(actions.editUserStart(data)),//fire action

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))//fire action cua redux co ten la changeLanguageApp
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
