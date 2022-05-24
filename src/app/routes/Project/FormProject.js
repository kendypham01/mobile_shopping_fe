import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import SideBar from '../../../components/SideBar';
import axios from 'axios'

class FormProject extends Component {
    constructor(props) {
        super(props)
        var today = new Date()
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        var dateTime = date + ' ' + time
        this.state = {
            projectName: '',
            projectLanguage: '',
            createDate: "",
            updateDate: "",
            expiredDate: "",
            username: "",
            userId: 9,
        }
        this.saveProject = this.saveProject.bind(this)
    }

    saveProject = (e) => {
        e.preventDefault()
        let project = {
            projectName: this.state.projectName,
            projectLanguage: this.state.projectLanguage,
            createDate: this.state.createDate,
            updateDate: this.state.updateDate,
            expiredDate: this.state.expiredDate,
            username: localStorage.getItem('username'),
            userId: this.state.userId,
        }
        console.log('project => ' + JSON.stringify(project))
        axios.post('http://localhost:8080/api/project', project).then((res) => {
            console.log('Thành công')
            alert('Thành công')
            window.location.replace('/list-project')
        })
    }

    changeProjectName = (e) => {
        this.setState({ projectName: e.target.value })
    }

    changeProjectLanguage = (e) => {
        this.setState({ projectLanguage: e.target.value })
    }
    changeExpiredDate = (e) => {
        this.setState({ expiredDate: e.target.value })
    }

    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    <SideBar></SideBar>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header></Header>
                            <div className="container-fluid">
                                <form>
                                    <div class="form-group">
                                        <label>Tên Project</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value = {this.state.projectName}
                                            onChange={this.changeProjectName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Project Language</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.projectLanguage}
                                            onChange={this.changeProjectLanguage}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Expried Date</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="date"
                                            onChange={this.changeExpiredDate}
                                            value = {this.state.expiredDate}
                                        />
                                    </div>
                                
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" onClick={this.saveProject}>
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        )
    }
}

export default FormProject;