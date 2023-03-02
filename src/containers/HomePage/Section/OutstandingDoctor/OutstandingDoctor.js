import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../../../store/actions"

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LANGUAGES } from '../../../../utils';

class OutstandingDoctor extends Component {

    constructor(props) {
        super(props) ;
            this.state = {
                arrDoctors: ''
            }
    }
    async componentDidMount() {
        this.props.getTopDoctorHomeStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.doctorsDataRedux !== this.props.doctorsDataRedux) {
            let arrDoctors = this.props.doctorsDataRedux
            this.setState({
                arrDoctors: arrDoctors,
                // users: arrUsers && arrUsers.length>0 ? arrUsers[0].key :''//set select mac dinh
            })
        }
        if(prevProps.doctorsDataRedux !== this.props.doctorsDataRedux) {
            let arrDoctors = this.props.doctorsDataRedux
            this.setState({
                arrDoctors: arrDoctors,
                // users: arrUsers && arrUsers.length>0 ? arrUsers[0].key :''//set select mac dinh
            })
        }
    }
    
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
        let doctors = this.state.arrDoctors;
        let {language} = this.props;
        return(
            <div className='section-OutstandingDoctor-container'>
                <div className="section-OutstandingDoctor-content">
                    <div className='OutstandingDoctor-header'>
                        <h2 className='OutstandingDoctor-heading'><FormattedMessage id='homeheader.The_famous_doctor_last_week'/></h2>
                        <div className='OutstandingDoctor-link'><span><FormattedMessage id='homeheader.Search'/></span></div>
                    </div>
                    <div className='OutstandingDoctor-body'>
                        <Slider {...settings}>
                            {doctors && doctors.length>0 && doctors.map((doctor,index) => {
                            let imageBase64 =''
                            if(doctor.image){
                                imageBase64 = new Buffer(doctor.image, 'base64').toString('binary');
                            }
                                let nameVi = `${doctor.positionData.valueVi}, ${doctor.firstName} ${doctor.lastName}`;
                                let nameEn = `${doctor.positionData.valueEn}, ${doctor.firstName} ${doctor.lastName}`;
                                return (
                                    <div className='OutstandingDoctor-customize' key={index}>
                                        <div className='OutstandingDoctor-contant'>
                                            <div className='OutstandingDoctor-image'
                                                style={{ backgroundImage:`url(${imageBase64})`}}
                                            ></div>
                                            <div className='OutstandingDoctor-info'>
                                                <h3>{language === LANGUAGES.VI ? nameVi : nameEn}</h3>
                                                <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
        
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        doctorsDataRedux: state.user.doctorsData,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTopDoctorHomeStart: () => dispatch(actions.fetchTopDoctorHomeStart()),//fire action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
