import React, { Component, createRef } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            firstName:'',
            lastName:'',
            phonenumber:'',
            address:'',
            password:'',
            isShowPassword: false,
        };
        
    }
    inputRef = createRef();
    
    componentDidMount() {
    }

    toggle = () => {
        this.props.handleHideModal()
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['firstName','lastName','email','password','phonenumber','address'];
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
    
    
    handleNewAddUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            this.props.handleCreateNewUser(this.state);//goij toi tk cha/ tryten dl state u con sang chaa
            this.setState({
                email:'',
                firstName:'',
                lastName:'',
                phonenumber:'',
                address:'',
                password:'',
            })      
        }
    }
    
    
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    
    handlefocusInput = () => {
        // this.inputRef.current.focus();

    }

    handleOnchangeInput = (e, data) => {
        console.log(e.target.value, data);
        //bad code modify state ( anhr huowrng den hieu nang)
        /**
         * this.state[data] === e.target.value
         * this.setState({
         * ...this.state
         * }, () => {
         *  console.log('check bad state:', this.state);
         * })
         */


        //good code 
        let copyState = {...this.state};
        copyState[data] = e.target.value;
        console.log('copyState:', copyState);
        this.setState({
            ...copyState
        })
    }

    render() {
        console.log('Check child props', this.props);
        console.log('Check child open modal', this.props.isOpen);
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => {this.toggle()}}  
                className={'modal-container'}
                sizes="lg"
                centered 
            >
                <ModalHeader toggle={() => {this.toggle()}}>Create New User</ModalHeader>
                <ModalBody>
                    <div className="form-container" onClick={() => {this.handlefocusInput()}}>
                        <div className="form-row">
                            <div className="col-12 text-center heading"><b>Create a new user:</b></div>
                            <form>
                                <div className="form-container">
                                    <div className="form-content">
                                        <label htmlFor="">First name (*):</label><br />
                                        <input 
                                            ref={this.inputRef}
                                            className="" 
                                            type="text" 
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'firstName')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Last name (*):</label><br />
                                        <input 
                                            className="" 
                                            type="text" 
                                            name="lastName" 
                                            value={this.state.lastName}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'lastName')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Email (*):</label><br />
                                        <input 
                                            className="" 
                                            type='email'
                                            name="email" 
                                            value={this.state.email}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'email')} }

                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Password (*):</label><br />
                                        <div className=''>
                                            <input 
                                                className="password-input" 
                                                name="password"
                                                type={this.state.isShowPassword?'text':'password'} 
                                                value={this.state.password}
                                                onChange={(e) => { this.handleOnchangeInput(e, 'password')} }
                                            />
                                            {this.state.password === ''?'':
                                                <span onClick={() => this.handleShowHidePassword()} className='icon-eye'><i className={this.state.isShowPassword?'far fa-eye':'far fa-eye-slash'}></i></span>
                                            }
                                        </div >
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Phone number (*):</label><br />
                                        <input 
                                            className="" 
                                            type="number" 
                                            name="phonenumber" 
                                            value={this.state.phonenumber}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'phonenumber')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Address (*):</label><br />
                                        <input 
                                            className="" 
                                            type="text" 
                                            name="address" 
                                            value={this.state.address}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'address')} }
                                                                                    
                                        />
                                    </div>
                                    {/* <div className="form-group col-md-12"><button type="submit" className="btn btn-primary">Submit</button></div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {this.handleNewAddUser()}}
                    >
                        Add User
                    </Button>
                    <Button 
                        color="secondary" 
                        onClick={() => {this.toggle()}}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


