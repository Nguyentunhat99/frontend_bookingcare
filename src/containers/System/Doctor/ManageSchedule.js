import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import './ManageSchedule.scss';
import * as actions from "../../../store/actions";
import Select from 'react-select';
import { LANGUAGES } from '../../../utils';
import DatePicker from '../../../components/Input/DatePicker';
// import moment from 'moment';
import { toast } from 'react-toastify';
import _ from 'lodash';

class ManageSchedule extends Component {//component con cua component doctor

    constructor(props) {
        super(props);
        this.state = {
            selectedDoctor:'',
            listDoctors:[],
            selectedDate: '',
            rangeTime:[]
        };
    }

    async componentDidMount() {
        this.props.getAllDoctor();
        this.props.getHourStart();
    }

    
    buildDataInputSelect  = (inputData) => {//hàm xu ly du lieu redux
        // console.log(inputData);
        let result = [];
        let {language} = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item,index)=>{
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object);
            })
            
        }
        return result
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.doctorsRedux !== this.props.doctorsRedux) {
            let dataSelect = this.buildDataInputSelect(this.props.doctorsRedux)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if(prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.doctorsRedux)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if(prevProps.hourDataRedux !== this.props.hourDataRedux) {
            let data = this.props.hourDataRedux;
            if(data && data.length > 0) {
                data = data.map(item => ({ ...item, isSelected: false }));//them isSelected vao mang 
            }
            console.log('data range time:',data);
            this.setState({
                rangeTime: data
            })
        }
        
    }
   
    handleChangeSelect = async (selectedDoctor) => {
        this.setState({ selectedDoctor })
    }

    handleonChangeDatePicker = (date) => {
        this.setState({
            selectedDate:date[0],
        })
    }

    selectedHour = (range) => {
        let {rangeTime}= this.state;
        if(rangeTime && rangeTime.length > 0){
            rangeTime = rangeTime.map(item => {
                if(item.id === range.id) item.isSelected = !item.isSelected;
                return item;
            })
            this.setState({
                rangeTime: rangeTime,
            })
        }
    }

    handleSaveSchedule = async () => {
        let { selectedDate, rangeTime, selectedDoctor } = this.state;
        let dataSchedule = [];
        if(!selectedDoctor) {//! la ko co gia tri 
            toast.error(<FormattedMessage id='manage-schedule.invalid_doctor'/>);
            return
        }else if(!selectedDate) {
            toast.error(<FormattedMessage id='manage-schedule.invalid_date'/>);
            return;
        } else {
            if(rangeTime && rangeTime.length > 0) {
                let selectedTime = rangeTime.filter(item => item.isSelected === true);
                if(selectedTime && selectedTime.length > 0 ){
                    selectedTime.map(time => {
                        let object = {};
                        object.doctorid = selectedDoctor.value;
                        object.timeType = time.keyMap;
                        object.date = new Date(selectedDate).getTime();
                        dataSchedule.push(object);
                    })
                } else {
                toast.error(<FormattedMessage id='manage-schedule.invalid_hour'/>);
                return
                }
            }
        }
        this.props.bulkCreateSchedule({
            arrSchedule: dataSchedule,
            doctorId: selectedDoctor.value,
            timeType: new Date(selectedDate).getTime(),
        })

    }

    render() {
        console.log('check state', this.state);
        // console.log('check props', this.props.hourDataRedux);
        let {rangeTime} = this.state;
        let {language} = this.props;
        return (
            <div className='ManageSchedule-container container'>
                <div className='ManageSchedule-content'>
                    <div className='ManageSchedule-title text-center mt-4 mb-4'>
                        <FormattedMessage id="manage-schedule.title"/>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='MS-select-doctor col-6 form-group'>
                                <label>
                                    <FormattedMessage id='manage-schedule.choose_a_doctor'/>
                                </label>
                                <Select
                                    value={this.state.selectedDoctor}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listDoctors}
                                /> 
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id='manage-schedule.choose_date'/>
                                </label><br/> 
                                <DatePicker 
                                    className='form-control'
                                    onChange={this.handleonChangeDatePicker}
                                    value={this.state.selectedDate}
                                    minDate={new Date()}
                                />
                            </div>
                            <div className='col-12 form-group MS-hour-schedule'>
                                <label className='col-12'>
                                    <FormattedMessage id="manage-schedule.choose_hour"/>
                                </label>
                                <div className='col-12'>
                                    {rangeTime && rangeTime.length > 0 &&
                                        rangeTime.map((range,index) => {
                                            return (
                                                <button 
                                                    className={range.isSelected === true? 'btn mr-2 ml-2 mb-2 btn-hour active' : 'btn mr-2 ml-2 mb-2 btn-hour'}
                                                    key={index} 
                                                    onClick={() => this.selectedHour(range)}>
                                                    {LANGUAGES.VI === language ? range.valueVi : range.valueEn}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary'
                                    onClick={() => this.handleSaveSchedule()}
                                >
                                    <FormattedMessage id='manage-schedule.save'/>
                                </button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn,
        doctorsRedux: state.user.AllDoctor,
        language: state.app.language,
        hourDataRedux: state.admin.hourData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.fetchAllDoctorStart()),//fire action
        getHourStart: () => dispatch(actions.fetchHourStart()),//fire action
        bulkCreateSchedule: (data) => dispatch(actions.bulkCreateScheduleStart(data)),//fire action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
