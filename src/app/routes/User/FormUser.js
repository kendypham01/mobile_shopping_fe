import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import SideBar from '../../../components/SideBar'
import Header from '../../../components/Header'
import axios from 'axios'

class FormUser extends Component {
    constructor(props) {
        super(props)
        var today = new Date()
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        var dateTime = date + ' ' + time
        this.state = {
            username: '',
            password: '',
            fullName: '',
            email: '',
            status: true,
            createDate: "",
            updateDate: "",
        }
        this.saveUser = this.saveUser.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
    }

    saveUser = (e) => {
        e.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password,
            fullName: this.state.fullName,
            email: this.state.email,
            createDate: this.state.createDate,
            updateDate: this.state.updateDate,
            status: this.state.status,
        }
        console.log('user => ' + JSON.stringify(user))
        axios.post('http://localhost:8080/api/user', user).then((res) => {
            console.log('Thành công')
            alert('Thành công')
            window.location.replace('/list-user')
        })
    }

    changeUserName = (e) => {
        this.setState({ username: e.target.value })
    }
    changePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    changeFullName = (e) => {
        this.setState({ fullName: e.target.value })
    }
    changeEmail = (e) => {
        this.setState({ email: e.target.value })
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
                                        <label>Username</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.username}
                                            onChange={this.changeUserName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.changePassword}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>FullName</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.fullName}
                                            onChange={this.changeFullName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.changeEmail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" onClick={this.saveUser}>
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

export default FormUser
