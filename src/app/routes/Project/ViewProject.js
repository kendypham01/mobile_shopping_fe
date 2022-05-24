import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import axios from 'axios'

class ViewProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            project: {},
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/project/' + this.state.id
        axios
            .get(url)
            .then((res) => {
                this.setState({
                    project: res.data,
                })
            })
            .catch((error) => {
                console.log('error: ', error)
            })
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
                                            value={this.state.project.projectName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Project Language</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.project.projectLanguage}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Expried Date</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="date"
                                            value={this.state.project.expiredDate}
                                        />
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

export default ViewProject
