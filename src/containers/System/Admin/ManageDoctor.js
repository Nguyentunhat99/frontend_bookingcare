import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import './ManageDoctor.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import Select from 'react-select';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils';
import { getDetailInforDoctorByIdService } from '../../../services/userService';
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown:'',
            contentHTML:'',
            selectedDoctor:'',
            description:'',
            listDoctors:[],
            action:''
        };
    }

    async componentDidMount() {
        this.props.getAllDoctor();
    }

    buildDataInputSelect  = (inputData) => {
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
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }
    handleSaveContentMarkdown = () => {
        console.log('check state', this.state);
        let {action} = this.state; //<=> let action = this.state.action
        if(action === CRUD_ACTIONS.CREATE){
            this.props.saveDetailInforDoctor({
                contentHTML: this.state.contentHTML,
                contentMarkdown: this.state.contentMarkdown,
                description: this.state.description,
                doctorId: this.state.selectedDoctor.value,
            });
            this.setState({
                contentMarkdown:'',
                contentHTML:'',
                selectedDoctor:'',
                description:'',
            })
        }
        if(action === CRUD_ACTIONS.EDIT){
            this.props.editMarkdown({
                contentHTML: this.state.contentHTML,
                contentMarkdown: this.state.contentMarkdown,
                description: this.state.description,
                doctorId: this.state.selectedDoctor.value,
            })
            this.setState({
                contentMarkdown:'',
                contentHTML:'',
                selectedDoctor:'',
                description:'',
                action: CRUD_ACTIONS.CREATE,
            })
        }
    }
    
    handleChangeSelect = async (selectedDoctor) => {
        this.setState({ selectedDoctor })
        let res = await getDetailInforDoctorByIdService(selectedDoctor.value);  
        console.log('res: ', res);
        if (res && res.data 
            && res.data.Markdown.contentHTML !== null 
            && res.data.Markdown.contentMarkdown !== null 
            && res.data.Markdown.description !== null){
            this.setState({
                contentHTML: res.data.Markdown.contentHTML,
                contentMarkdown: res.data.Markdown.contentMarkdown,
                description: res.data.Markdown.description,
                action: CRUD_ACTIONS.EDIT,
            })
        }else{
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                action: CRUD_ACTIONS.CREATE,
            })        
        }
    };

    handleOnchangeTextDesc = (e) => {
        this.setState({ 
            description: e.target.value
        })
    }

    render() {
        console.log('check state', this.state);
        return (
            <div className='manage-doctor-container container'> 
                <div className='manage-doctor-title'>Thêm thông tin</div>
                <div className='more-info'>
                    <div className='select-doctor'>
                        <label>Chọn bác sĩ</label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                        /> 
                    </div>
                    <div className='info-intro'>
                        <label>Thông tin giới thiệu</label><br/>
                        <textarea rows="8" cols="50"
                            onChange={(e) => this.handleOnchangeTextDesc(e)}
                            value={this.state.description}
                        ></textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor 
                        style={{ height: '500px' }} 
                        renderHTML={text => mdParser.render(text)} 
                        onChange={this.handleEditorChange} 
                        value={this.state.contentMarkdown}
                    />
                </div>
                <div 
                    className={this.state.action === CRUD_ACTIONS.EDIT 
                        ? 'btn btn-warning save-info-doctor'
                        :'btn btn-success save-info-doctor'}
                        onClick={() => this.handleSaveContentMarkdown()}
                >
                    {this.state.action === CRUD_ACTIONS.EDIT ? 'Edit' : 'Save'}
                </div>
            </div>
        );
    }
}
        
    


const mapStateToProps = state => {
    return {
        doctorsRedux: state.user.AllDoctor,
        language: state.app.language,
        // dataDetailInforDoctorByIdRedux: state.user.dataDetailInforDoctorById,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.fetchAllDoctorStart()),//fire action
        saveDetailInforDoctor: (data) => dispatch(actions.saveDetailInforDoctorStart(data)),//fire action
        editMarkdown: (data) => dispatch(actions.editMarkdownStart(data)),//fire action
        // DetailInforDoctorById: (id) => dispatch(actions.fetchDetailInforDoctorByIdStart(id)),//fire action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
