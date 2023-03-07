import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";

import HomeHeader from '../../HomePage/HomeHeader/HomeHeader';
import Footer from '../../HomePage/Section/Footer/Footer';
import './DetailDoctor.scss';
import { FormattedMessage } from 'react-intl';


class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailInforDoctorById:[]
        };
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.props.DetailInforDoctorById(id);  
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.dataDetailInforDoctorByIdRedux !== this.props.dataDetailInforDoctorByIdRedux) {
            let data = this.props.dataDetailInforDoctorByIdRedux;
            this.setState({
                detailInforDoctorById: data
            })
        }

    }
    render() {
        // console.log(this.props.match.params.id);
        console.log('detail infor doctor by id check state', this.state); 
        let {language} = this.props;
        let doctor = this.state.detailInforDoctorById; 
        console.log('doctor infor', doctor);
        let nameVi = '';
        let nameEn = '';
        if(doctor && doctor.positionData){
            nameVi = `${doctor.positionData.valueVi} ${doctor.firstName} ${doctor.lastName}`;
            nameEn = `${doctor.positionData.valueEn} ${doctor.lastName} ${doctor.firstName}`;
        }
            return (
                <div>
                    <HomeHeader isShowBanner={false}/>
                    <div className='detail-doctor-container'>
                        <div className='intro-doctor'>
                            <div className='intro-doctor-content'>
                                <div className='intro-doctor-image'
                                    style={{ backgroundImage:`url(${doctor.image})`}}
                                >
                                </div>
                                <div className='intro-doctor-quickview'>
                                    <h1 className='intro-doctor-name'>
                                        {language === LANGUAGES.VI ? nameVi : nameEn}
                                    </h1>
                                    {doctor && doctor.Markdown && doctor.Markdown.description &&
                                        <p className='intro-doctor-summary'>
                                            {doctor.Markdown.description}
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='examination-schedule'></div>
                        <div className='detail-infor-doctor'>
                            <div className='detail-infor-doctor-content'>
                                {doctor && doctor.Markdown && doctor.Markdown.contentHTML &&
                                    <div dangerouslySetInnerHTML={{__html: doctor.Markdown.contentHTML}}></div>    
                                }
                            </div>
                        </div>
                        <div className='feedback'>
                            OK
                        </div>
                    </div>
                    <Footer />
                </div>
            );        
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        dataDetailInforDoctorByIdRedux: state.user.dataDetailInforDoctorById,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        DetailInforDoctorById: (id) => dispatch(actions.fetchDetailInforDoctorByIdStart(id)),//fire action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
